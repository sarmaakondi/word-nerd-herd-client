import { useParams } from "react-router-dom";

const WordDetails = ({ wordList }) => {
    const { WordId } = useParams();
    const currentWordDetails = wordList.words.filter((word) => word._id === WordId);
    console.log(currentWordDetails);

    // const wordListDetails = wordList.words.map((item) => (
    //     <li key={item._id}>
    //         <>
    //             <p>{item.word}</p>
    //             <p>Meaning: {item.meaning}</p>
    //             <p></p>
    //         </>
    //     </li>
    // ));
    return (
        <p>Hello</p>
    )
};

export default WordDetails;
