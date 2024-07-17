import { useParams } from "react-router-dom";

const WordDetails = ({ wordList }) => {
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
            </>
        </li>
    ));
    return <ul>{wordListItems}</ul>;
};

export default WordDetails;
