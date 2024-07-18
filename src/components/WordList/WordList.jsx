import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { motion, AnimatePresence } from "framer-motion";

import "./WordList.css";

const WordList = ({ wordList, handleFavoritedWord, checkLearnedWord }) => {
    const user = useContext(AuthedUserContext);
    const location = useLocation();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(wordList.words);
    }, [wordList.words]);

    const bringToFront = (index) => {
        const newCards = [...cards];
        const [selectedCard] = newCards.splice(index, 1);
        newCards.push(selectedCard);
        setCards(newCards);
    };

    const handleClick = (id, event) => {
        event.stopPropagation();
        if (location.pathname.includes("favoritedWords")) {
            checkLearnedWord(id);
        }
    };

    return (
        <div className="wordlist-container">
            <div className="dashboard-statistics dashboard-card user-progress">
                <li>
                    {location.pathname.includes("/words")
                        ? "Learn New Words"
                        : location.pathname.includes("learnedWords")
                        ? "Learned Words"
                        : "Favortied Words"}
                </li>
            </div>
            <div
                className="card-stack"
                style={{ position: "relative", height: "500px" }}>
                <AnimatePresence initial={false}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card._id}
                            className={`card ${
                                index === cards.length - 1 ? "active" : ""
                            }`}
                            initial={{
                                scale: 0.8,
                                y: 40 * (cards.length - index - 1),
                            }}
                            animate={{
                                scale: 1,
                                y: 40 * (cards.length - index - 1),
                            }}
                            exit={{
                                scale: 0.8,
                                y: 40 * (cards.length - index - 1),
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 40,
                            }}
                            style={{
                                zIndex: index,
                            }}
                            onClick={() => bringToFront(index)}>
                            <div className="wordlist-fav-container">
                                <h2>{card.word}</h2>
                                <div className="wordlist-fav-child-container">
                                    {user !== null && (
                                        <i
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleFavoritedWord(card._id);
                                            }}
                                            className="fa-solid fa-heart"></i>
                                    )}
                                    <Link to={`/words/${card._id}`}>
                                        <button
                                            onClick={(event) =>
                                                handleClick(card._id, event)
                                            }>
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <p>{card.meaning}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default WordList;
