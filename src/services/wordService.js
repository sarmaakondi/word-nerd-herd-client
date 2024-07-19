const BASE_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

// PUBLIC ROUTES

// AUTHENTICATED ROUTES

const helperFunction = async (category) => {
    try {
        const response = await fetch(BASE_URL + category, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const index = async (category) => {
    const response = await helperFunction(category, null);
    return response;
};

const show = async (id) => {
    const response = await helperFunction(BASE_URL, id);
    return response;
};

const create = async (id) => {
    try {
        const response = await fetch(BASE_URL + "/learnedWords" + "/" + id, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const createFavoriteWord = async (id) => {
    try {
        const response = await fetch(BASE_URL + "/favoritedWords" + "/" + id, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const deleteFavoriteWord = async (id) => {
    try {
        const response = await fetch(BASE_URL + "/favoritedWords" + "/" + id, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const checkFavoriteWord = async (id) => {
    try {
        const response = await fetch(BASE_URL + "/favoritedWords" + "/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const checkLearnedWord = async (id) => {
    try {
        const response = await fetch(BASE_URL + "/learnedWords" + "/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const getLearnedWordsCount = async () => {
    try {
        const response = await fetch(BASE_URL + "/learnedWords/get/count", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const getFavoritedWordsCount = async () => {
    try {
        const response = await fetch(BASE_URL + "/favoritedWords/get/count", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export {
    index,
    show,
    create,
    createFavoriteWord,
    deleteFavoriteWord,
    checkFavoriteWord,
    checkLearnedWord,
    getLearnedWordsCount,
    getFavoritedWordsCount,
};
