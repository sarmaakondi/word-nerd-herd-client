import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App";

const WordList = ({ wordList }) => {
    const user = useContext(AuthedUserContext);
    const wordListItems = wordList.words.map((item) => (
        <li key={item._id}>
            <>
                {item.word}
                {user !== null ? (
                    <>
                        <i
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
                    <button style={{ marginLeft: "20px" }}>Learn More</button>
                </Link>
                <p>Meaning: {item.meaning}</p>
            </>
        </li>
    ));
    return <ul>{wordListItems}</ul>;
};

export default WordList;
