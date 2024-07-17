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

export { index, show, create };
