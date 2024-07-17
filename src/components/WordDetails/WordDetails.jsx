import { useParams } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";

const WordDetails = ({ wordList, handleLearnedWord }) => {
    const user = useContext(AuthedUserContext);
    const { wordId } = useParams();
    const currentWordDetails = wordList.words.filter(
        (word) => word._id === wordId
    );
    const wordListItems = currentWordDetails.map((item) => (
        <li key={item._id}>
            <>
                <h1>{item.word}</h1>
                <h3>Meaning:</h3>
                <p>{item.meaning}</p>
                <h3>Examples:</h3>
                {item.examples.map((example, index) => (
                    <p key={index}>{example}</p>
                ))}
                <i
                    style={{
                        marginLeft: "20px",
                        fontSize: "24px",
                        cursor: "pointer",
                    }}
                    className="fa-solid fa-volume-low"
                ></i>
                <i
                    style={{
                        marginLeft: "20px",
                        fontSize: "24px",
                        cursor: "pointer",
                    }}
                    className="fa-solid fa-microphone"
                ></i>
                {user !== null && item.isLearning === undefined ? (
                    <>
                        <button
                            onClick={() => handleLearnedWord(item._id)}
                            style={{ marginLeft: "20px" }}
                        >
                            Mark as Learned
                        </button>
                    </>
                ) : (
                    ""
                )}
            </>
        </li>
    ));
    return <ul>{wordListItems}</ul>;
};

export default WordDetails;
