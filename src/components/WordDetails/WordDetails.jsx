import { useParams, useNavigate } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";

import "./WordDetails.css";

const WordDetails = ({ wordList, handleLearnedWord, buttonState }) => {
    const user = useContext(AuthedUserContext);
    const navigate = useNavigate();
    const { wordId } = useParams();
    const currentWordDetails = wordList.words.filter(
        (word) => word._id === wordId
    );

    // Read Aloud
    const readAloud = (word) => {
        const message = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(message);
    };

    // Check Pronunciation
    const checkPronunciation = (word) => {
        let grammar;
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        const SpeechGrammarList =
            window.SpeechGrammarList || window.webkitSpeechGrammarList;
        const userPhrase = word.toLowerCase();
        const recognition = new SpeechRecognition();
        const speechRecognitionList = new SpeechGrammarList();

        grammar =
            "#JSGF V1.0; grammar phrase; public <phrase> = " + userPhrase + ";";

        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript.toLowerCase();
            if (speechResult === userPhrase) {
                alert("I heard the correct phrase!");
            } else {
                alert("That didn't sound right.");
            }
        };

        recognition.onspeechend = () => {
            recognition.stop();
        };

        recognition.onerror = (event) => {
            alert("Error occurred in recognition: " + event.error);
        };
    };

    const wordListItems = currentWordDetails.map((item) => (
        <div key={item._id} className="word-list-parent-container">
            <div className="dashboard-statistics dashboard-card user-progress word">
                <h1>{item.word}</h1>
            </div>

            <div className="word-details-card">
                <li>
                    <>
                        <h3>
                            Meaning:{" "}
                            <span className="meaning">
                                {item.meaning[0].toUpperCase() +
                                    item.meaning.slice(1).toLowerCase()}
                            </span>
                        </h3>

                        <h3>Examples:</h3>
                        {item.examples.map((example, index) => (
                            <p key={index}>
                                {example[0].toUpperCase() +
                                    example.slice(1).toLowerCase()}
                            </p>
                        ))}
                        <div className="word-details-icon-container">
                            <div className="word-details-speech">
                                <i
                                    className="fa-solid fa-volume-low"
                                    onClick={() => readAloud(item.word)}></i>
                                <i
                                    className="fa-solid fa-microphone"
                                    onClick={() =>
                                        checkPronunciation(item.word)
                                    }></i>
                            </div>
                            <div className="learned-button-container">
                                {user !== null &&
                                item.isLearning === undefined &&
                                buttonState === 0 ? (
                                    <>
                                        <button
                                            className="learn-button"
                                            onClick={() => {
                                                handleLearnedWord(item._id);
                                                navigate(-1);
                                            }}>
                                            Mark as Learned
                                        </button>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </>
                </li>
            </div>
        </div>
    ));
    return (
        <div className="word-details-parent-container">
            {user ? (
                ""
            ) : (
                <nav>
                    <ul>
                        <div className="navbar-card navbar-header">
                            <div className="navbar-user">
                                <li>Hi, Stranger 👋</li>
                                <li onClick={() => navigate(-1)}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </li>
                            </div>
                        </div>
                    </ul>
                </nav>
            )}

            <ul>{wordListItems}</ul>
        </div>
    );
};

export default WordDetails;
