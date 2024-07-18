import { AuthedUserContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import WordList from "../WordList/WordList";
import WordDetails from "../WordDetails/WordDetails";

import * as wordService from "../../services/wordService";

const Dashboard = ({ category }) => {
    const user = useContext(AuthedUserContext);
    const [wordList, setWordList] = useState({
        words: [],
        count: 0,
    });
    const [learnedWord, setLearnedWord] = useState(false);
    const [favoritedWord, setFavoritedWord] = useState(false);
    const [buttonState, setButtonState] = useState(0);

    const handleLearnedWord = async (wordId) => {
        await wordService.create(wordId);
        setLearnedWord(true);
    };

    const handleFavoritedWord = async (wordId) => {
        const isFavorited = await wordService.checkFavoriteWord(wordId);
        if (isFavorited.length === 0) {
            await wordService.createFavoriteWord(wordId);
            setFavoritedWord(!favoritedWord);
        } else {
            await wordService.deleteFavoriteWord(wordId);
            setFavoritedWord(!favoritedWord);
        }
    };

    const checkLearnedWord = async (wordId) => {
        const isLearned = await wordService.checkLearnedWord(wordId);
        setButtonState(isLearned.length);
    };

    useEffect(() => {
        const fetchWordList = async () => {
            const wordList = await wordService.index(category);
            setWordList(wordList);
        };
        if (category) fetchWordList();
    }, [category, learnedWord, favoritedWord]);

    return (
        <main>
            {user ? (
                <Routes>
                    <Route
                        path="/words/auth/user"
                        element={
                            <WordList
                                wordList={wordList}
                                handleFavoritedWord={handleFavoritedWord}
                            />
                        }></Route>
                    <Route
                        path="/learnedWords"
                        element={
                            <WordList
                                wordList={wordList}
                                handleFavoritedWord={handleFavoritedWord}
                            />
                        }></Route>
                    <Route
                        path="/favoritedWords"
                        element={
                            <WordList
                                wordList={wordList}
                                handleFavoritedWord={handleFavoritedWord}
                                checkLearnedWord={checkLearnedWord}
                            />
                        }></Route>
                    <Route
                        path="/words/:wordId"
                        element={
                            <WordDetails
                                wordList={wordList}
                                handleLearnedWord={handleLearnedWord}
                                buttonState={buttonState}
                            />
                        }></Route>
                </Routes>
            ) : (
                <Routes>
                    <Route
                        path="/words"
                        element={<WordList wordList={wordList} />}></Route>
                    <Route
                        path="/words/:wordId"
                        element={<WordDetails wordList={wordList} />}></Route>
                </Routes>
            )}
        </main>
    );
};

export default Dashboard;
