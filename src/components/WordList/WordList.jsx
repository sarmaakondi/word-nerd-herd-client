const WordList = ({ wordList }) => {
    console.log(wordList);
    // const wordListItems = {wordList.words.map((item) => (
    //     <li key={item._id}>{item.word}</li>
    // ))};
    return (
        <ul>
            {wordList.words.map((item) => (
                <li key={item._id}>{item.word}</li>
            ))}
        </ul>
    );
};

export default WordList;
