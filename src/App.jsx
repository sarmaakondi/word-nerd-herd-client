import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import * as authService from "../src/services/authService";

export const AuthedUserContext = createContext(null);

const App = () => {
    const [user, setUser] = useState(authService.getUser()); // using the method from authservice
    const [category, setCategory] = useState(
        localStorage.getItem("category") || "/words"
    );

    const handleCategory = (updatedCategory) => {
        setCategory(updatedCategory);
        localStorage.setItem("category", updatedCategory);
    };

    const handleSignout = () => {
        authService.signout();
        setUser(null);
    };

    return (
        <>
            <AuthedUserContext.Provider value={user}>
                <NavBar
                    user={user}
                    handleSignout={handleSignout}
                    handleCategory={handleCategory}
                />
                <Routes>
                    <Route
                        path="*"
                        element={<Dashboard user={user} category={category} />}
                    />

                    <Route
                        path="/signup"
                        element={<SignupForm setUser={setUser} />}
                    />
                    <Route
                        path="/signin"
                        element={<SigninForm setUser={setUser} />}
                    />
                </Routes>
            </AuthedUserContext.Provider>
        </>
    );
};

export default App;
