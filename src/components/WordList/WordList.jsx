import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthedUserContext } from "../../App";

const WordList = ({ wordList, handleFavoritedWord, checkLearnedWord }) => {
    const user = useContext(AuthedUserContext);
    const location = useLocation();

    const handleClick = (id) => {
        if (location.pathname.includes("favoritedWords")) {
            checkLearnedWord(id);
        }
    };

    const wordListItems = wordList.words.map((item) => (
        <li key={item._id}>
            <>
                {item.word}
                {user !== null ? (
                    <>
                        <i
                            onClick={() => handleFavoritedWord(item._id)}
                            style={{
                                marginLeft: "20px",
                                fontSize: "24px",
                                cursor: "pointer",
                            }}
                            className="fa-regular fa-heart"></i>
                    </>
                ) : (
                    ""
                )}
                <Link to={`/words/${item._id}`}>
                    <button
                        style={{ marginLeft: "20px" }}
                        onClick={() => handleClick(item._id)}>
                        Learn More
                    </button>
                </Link>
                <p>Meaning: {item.meaning}</p>
            </>
        </li>
    ));
    return <ul>{wordListItems}</ul>;
};

export default WordList;
