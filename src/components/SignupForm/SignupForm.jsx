import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

import "./SignupForm.css";

const SignupForm = (props) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState([""]);
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        passwordConf: "",
    });

    const updateMessage = (msg) => {
        setMessage(msg);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUserResponse = await authService.signup(formData);
            props.setUser(newUserResponse.user);
            navigate("/");
        } catch (err) {
            updateMessage(err.message);
        }
    };

    const { email, username, password, passwordConf } = formData;

    return (
        <main className="signup-container">
            <h1>Sign Up</h1>
            <p>{message}</p>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="signup-form-fields">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-fields">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="name"
                        value={username}
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-fields">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-fields">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm"
                        value={passwordConf}
                        name="passwordConf"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="signup-form-buttons">
                    <button className="signup-form-signup">Sign Up</button>
                    <Link to="/">
                        <button className="signup-form-cancel">Cancel</button>
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default SignupForm;
