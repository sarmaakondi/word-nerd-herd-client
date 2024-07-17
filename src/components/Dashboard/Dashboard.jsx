import { AuthedUserContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import WordList from "../WordList/WordList";
import WordDetails from "../WordDetails/WordDetails";

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
            <Routes>
                <Route
                    path="/words"
                    element={<WordList wordList={wordList} />}></Route>
                <Route
                    path="/words/:wordId"
                    element={<WordDetails wordList={wordList} />}></Route>
            </Routes>
        </main>
    );
};

export default Dashboard;
