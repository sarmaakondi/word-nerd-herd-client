import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import * as authService from "../src/services/authService";

import * as wordService from "./services/wordService";
import WordList from "./components/WordList/WordList";
import WordDetails from "./components/WordDetails/WordDetails";

export const AuthedUserContext = createContext(null);

const App = () => {
    const [user, setUser] = useState(authService.getUser()); // using the method from authservice
    const [category, setCategory] = useState(
        localStorage.getItem("category") || "/words"
    );
    const [buttonState, setButtonState] = useState(0);

    const [favoritedWord, setFavoritedWord] = useState(false);
    const [learnedWord, setLearnedWord] = useState(false);

    const [wordList, setWordList] = useState({
        words: [],
        count: 0,
    });

    const handleCategory = (updatedCategory) => {
        setCategory(updatedCategory);
        localStorage.setItem("category", updatedCategory);
    };

    const handleSignout = () => {
        authService.signout();
        setUser(null);
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

    const handleLearnedWord = async (wordId) => {
        await wordService.create(wordId);
        setLearnedWord(true);
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
        <>
            <AuthedUserContext.Provider value={user}>
                <NavBar
                    user={user}
                    handleSignout={handleSignout}
                    handleCategory={handleCategory}
                />
                <Routes>
                    {user ? (
                        <>
                            <Route
                                path="/"
                                element={
                                    <Dashboard
                                        user={user}
                                        category={category}
                                        handleCategory={handleCategory}
                                    />
                                }
                            />
                            <Route
                                path="/words/auth/user"
                                element={
                                    <WordList
                                        wordList={wordList}
                                        favoritedWord={favoritedWord}
                                        handleFavoritedWord={
                                            handleFavoritedWord
                                        }
                                    />
                                }></Route>
                            <Route
                                path="/learnedWords"
                                element={
                                    <WordList
                                        wordList={wordList}
                                        handleFavoritedWord={
                                            handleFavoritedWord
                                        }
                                    />
                                }></Route>
                            <Route
                                path="/favoritedWords"
                                element={
                                    <WordList
                                        wordList={wordList}
                                        handleFavoritedWord={
                                            handleFavoritedWord
                                        }
                                        checkLearnedWord={checkLearnedWord}
                                        favoritedWord={favoritedWord}
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
                        </>
                    ) : (
                        <>
                            <Route
                                path="/words"
                                element={
                                    <WordList wordList={wordList} />
                                }></Route>
                            <Route
                                path="/words/:wordId"
                                element={
                                    <WordDetails wordList={wordList} />
                                }></Route>
                        </>
                    )}

                    <Route
                        path="/signup"
                        element={<SignupForm setUser={setUser} />}
                    />
                    <Route
                        path="/signin"
                        element={<SigninForm setUser={setUser} />}
                    />
                </Routes>
            </AuthedUserContext.Provider>
        </>
    );
};

export default App;
