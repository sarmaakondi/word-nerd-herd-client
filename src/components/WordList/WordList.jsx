const WordList = ({ wordList }) => {
    console.log(wordList);
    const wordListItems = wordList.words.map((item) => (
        <li key={item._id}>{item.word}</li>
    ));
    return <ul>{wordListItems}</ul>;
};

export default WordList;
