import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

import "./SigninForm.css";

const SigninForm = (props) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState([""]);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const updateMessage = (msg) => {
        setMessage(msg);
    };

    const handleChange = (e) => {
        updateMessage("");
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await authService.signin(formData);
            props.setUser(user);
            navigate("/dashboard");
        } catch (err) {
            updateMessage(err.message);
        }
    };

    return (
        <main className="signin-container">
            <h1>Log In</h1>
            <p>{message}</p>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="signin-form-fields">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        autoComplete="off"
                        id="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signin-form-fields">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        autoComplete="off"
                        id="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signin-form-buttons">
                    <button className="signin-form-login">Log In</button>
                    <Link to="/">
                        <button className="signin-form-cancel">Cancel</button>
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default SigninForm;
