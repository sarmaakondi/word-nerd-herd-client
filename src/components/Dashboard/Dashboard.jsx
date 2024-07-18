import { Link } from "react-router-dom";

import "./Dashboard.css";

const appendObject = {
    "/words": "",
    "/learnedWords": "/words",
    "/favoritedWords": "/words",
};

const Dashboard = ({ handleCategory }) => {
    const handleClick = (event) => {
        handleCategory(event.currentTarget.getAttribute("href"));
    };

    return (
        <nav>
            <ul>
                <div className="dashboard-statistics dashboard-card user-progress">
                    <li>Your progress 📚</li>
                </div>
                <div className="dashboard-card">
                    <li>
                        <Link
                            to="/words/auth/user"
                            onClick={(event) => handleClick(event)}>
                            Learn New Words
                        </Link>
                    </li>
                    <li className="dashboard-word-stats">10 words</li>
                </div>
                <div className="dashboard-card">
                    <li>
                        <Link
                            to="/learnedWords"
                            onClick={(event) =>
                                handleCategory(
                                    event.currentTarget.getAttribute("href") +
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
                    <li className="dashboard-word-stats">156 words</li>
                </div>
                <div className="dashboard-card">
                    <li>
                        <Link
                            to="/favoritedWords"
                            onClick={(event) =>
                                handleCategory(
                                    event.currentTarget.getAttribute("href") +
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
                    <li className="dashboard-word-stats">22 words</li>
                </div>
            </ul>
        </nav>
    );
};

export default Dashboard;
