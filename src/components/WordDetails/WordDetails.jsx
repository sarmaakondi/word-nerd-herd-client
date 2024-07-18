import { useParams } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";

import "./WordDetails.css";

const WordDetails = ({ wordList, handleLearnedWord, buttonState }) => {
    const user = useContext(AuthedUserContext);
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
        <li key={item._id}>
            <>
                <div className="word-details-card">
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
                        onClick={() => readAloud(item.word)}></i>
                    <i
                        style={{
                            marginLeft: "20px",
                            fontSize: "24px",
                            cursor: "pointer",
                        }}
                        className="fa-solid fa-microphone"
                        onClick={() => checkPronunciation(item.word)}></i>
                    {user !== null &&
                    item.isLearning === undefined &&
                    buttonState === 0 ? (
                        <>
                            <button
                                onClick={() => handleLearnedWord(item._id)}
                                style={{ marginLeft: "20px" }}>
                                Mark as Learned
                            </button>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </>
        </li>
    ));
    return <ul>{wordListItems}</ul>;
};

export default WordDetails;
