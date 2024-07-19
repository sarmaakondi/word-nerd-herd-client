import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as wordService from "../../services/wordService";

import "./Dashboard.css";

const appendObject = {
    "/words": "",
    "/learnedWords": "/words",
    "/favoritedWords": "/words",
};

const Dashboard = ({ handleCategory }) => {
    const [learnedWordCount, setLearnedWordsCount] = useState(0);
    const [favoritedWordCount, setFavoritedWordCount] = useState(0);

    const handleClick = (event) => {
        handleCategory(event.currentTarget.getAttribute("href"));
    };

    useEffect(() => {
        const fetchLearnedWordsCount = async () => {
            const response = await wordService.getLearnedWordsCount();
            setLearnedWordsCount(response["count"]);
        };

        const fetchFavoritedWordsCount = async () => {
            const response = await wordService.getFavoritedWordsCount();
            setFavoritedWordCount(response["count"]);
        };
        fetchLearnedWordsCount();
        fetchFavoritedWordsCount();
    }, []);

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
                    <li className="dashboard-word-stats">5 words</li>
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
                    <li className="dashboard-word-stats">
                        {learnedWordCount} words
                    </li>
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
                    <li className="dashboard-word-stats">
                        {favoritedWordCount} words
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Dashboard;
