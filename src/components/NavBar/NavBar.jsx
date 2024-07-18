import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";

const appendObject = {
    "/words": "",
    "/learnedWords": "/words",
    "/favoritedWords": "/words",
};

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
                                <li>
                                    <Link to="" onClick={handleSignout}>
                                        Sign Out
                                    </Link>
                                </li>
                            </div>
                            <div>
                                <li>Click any card to begin!</li>
                            </div>
                        </div>
                        <div className="navbar-statistics">
                            <li>Your statistics</li>
                        </div>
                        <div className="navbar-card">
                            <li>
                                <Link
                                    to="/words/auth/user"
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
                            <li className="navbar-word-stats">10 words</li>
                        </div>
                        <div className="navbar-card">
                            <li>
                                <Link
                                    to="/learnedWords"
                                    onClick={(event) =>
                                        handleCategory(
                                            event.currentTarget.getAttribute(
                                                "href"
                                            ) +
                                                appendObject[
                                                    event.currentTarget.getAttribute(
                                                        "href"
                                                    )
                                                ]
                                        )
                                    }>
                                    Explore Learned Words
                                </Link>
                            </li>
                            <li className="navbar-word-stats">156 words</li>
                        </div>
                        <div className="navbar-card">
                            <li>
                                <Link
                                    to="/favoritedWords"
                                    onClick={(event) =>
                                        handleCategory(
                                            event.currentTarget.getAttribute(
                                                "href"
                                            ) +
                                                appendObject[
                                                    event.currentTarget.getAttribute(
                                                        "href"
                                                    )
                                                ]
                                        )
                                    }>
                                    Explore Favorited Words
                                </Link>
                            </li>
                            <li className="navbar-word-stats">22 words</li>
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
