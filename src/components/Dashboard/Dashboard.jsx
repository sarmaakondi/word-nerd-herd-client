import { AuthedUserContext } from "../../App";
import { useContext, useState, useEffect } from "react";

import WordList from "../WordList/WordList";

import * as wordService from "../../services/wordService";

const Dashboard = () => {
    const user = useContext(AuthedUserContext);
    const [wordList, setWordList] = useState({
        words: [],
        count: 0,
    });

    useEffect(() => {
        const fetchWordList = async () => {
            const wordList = await wordService.index();
            setWordList(wordList);
        };
        fetchWordList();
    }, []);

    return (
        <main>
            <WordList wordList={wordList} />
        </main>
    );
};

export default Dashboard;
