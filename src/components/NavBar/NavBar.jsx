import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";

import "./NavBar.css";

const NavBar = ({ handleSignout, handleCategory }) => {
    const user = useContext(AuthedUserContext);
    return (
        <>
            {user ? (
                <nav>
                    <ul>
                        <div className="navbar-card navbar-header">
                            <div className="navbar-user">
                                <li>
                                    Hi,{" "}
                                    {user.username[0].toUpperCase() +
                                        user.username.slice(1).toLowerCase()}
                                    {" 👋"}
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
            ) : (
                <nav>
                    <ul>
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
                                        event.currentTarget.getAttribute("href")
                                    )
                                }>
                                Learn New Words
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};
export default NavBar;
