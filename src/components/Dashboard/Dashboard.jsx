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

    const handleLearnedWord = async (wordId) => {
        await wordService.create(wordId);
        setLearnedWord(true);
    };

    const handleFavoritedWord = async (wordId, isFavorited) => {
        if (isFavorited === undefined) {
            console.log(favoritedWord)
            await wordService.createFavoriteWord(wordId);
            setFavoritedWord(!favoritedWord);
        } else {
            await wordService.deleteFavoriteWord(wordId);
            setFavoritedWord(!favoritedWord);
        }
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
                        }
                    ></Route>
                    <Route
                        path="/learnedWords"
                        element={<WordList wordList={wordList} />}
                    ></Route>
                    <Route
                        path="/favoritedWords"
                        element={
                            <WordList
                                wordList={wordList}
                                handleFavoritedWord={handleFavoritedWord}
                            />
                        }
                    ></Route>
                    <Route
                        path="/words/:wordId"
                        element={
                            <WordDetails
                                wordList={wordList}
                                handleLearnedWord={handleLearnedWord}
                            />
                        }
                    ></Route>
                </Routes>
            ) : (
                <Routes>
                    <Route
                        path="/words"
                        element={<WordList wordList={wordList} />}
                    ></Route>
                    <Route
                        path="/words/:wordId"
                        element={<WordDetails wordList={wordList} />}
                    ></Route>
                </Routes>
            )}
        </main>
    );
};

export default Dashboard;
