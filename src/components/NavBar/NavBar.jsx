import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";

import "./NavBar.css";

const NavBar = ({ handleSignout, handleCategory }) => {
    const user = useContext(AuthedUserContext);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            {user ? (
                <div className="navbar-container">
                    <nav>
                        <ul>
                            <div className="navbar-card navbar-header">
                                <div className="navbar-user">
                                    <li>
                                        Hi,{" "}
                                        {user.username[0].toUpperCase() +
                                            user.username
                                                .slice(1)
                                                .toLowerCase()}
                                        {" 👋"}
                                    </li>
                                    <li
                                        onClick={() => {
                                            if (
                                                !location.pathname.includes(
                                                    "dashboard"
                                                )
                                            )
                                                navigate(-1);
                                        }}>
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </li>
                                    <li className="navbar-signout">
                                        <Link to="" onClick={handleSignout}>
                                            Sign Out
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className="navbar-public-container">
                    <nav>
                        <ul>
                            <h1>
                                <span className="app-title">W</span>orld of{" "}
                                <span className="app-title">W</span>ords
                            </h1>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link
                                    to="/words"
                                    onClick={(event) =>
                                        handleCategory(
                                            event.currentTarget.getAttribute(
                                                "href"
                                            )
                                        )
                                    }>
                                    Learn New Words
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};
export default NavBar;
