import { Link } from "react-router-dom";

const WordList = ({ wordList }) => {
    const wordListItems = wordList.words.map((item) => (
        <li key={item._id}>
            <>
                <Link to={`/words/${item._id}`}>{item.word}</Link>
                <p>Meaning: {item.meaning}</p>
            </>
        </li>
    ));
    return <ul>{wordListItems}</ul>;
};

export default WordList;
