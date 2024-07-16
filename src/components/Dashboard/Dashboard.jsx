import { AuthedUserContext } from "../../App";
import { useContext, useState, useEffect } from "react";

import WordList from "../WordList/WordList";

import * as wordService from "../../services/wordService";

const Dashboard = () => {
    const user = useContext(AuthedUserContext);
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const fetchWordList = async () => {
            const wordList = await wordService.index();
            // const temp = wordList.words.map((word) => word.word);
            // console.log(temp);
            setWordList(wordList);
        };
        fetchWordList();
        console.log(wordList);
    }, []);

    return (
        <main>
            <WordList wordList={wordList} />
        </main>
    );
};

export default Dashboard;
