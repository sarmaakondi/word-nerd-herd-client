let BASE_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL + "/words";

// PUBLIC ROUTES

// AUTHENTICATED ROUTES

const helperFunction = async (id) => {
    if (id !== null) {
        BASE_URL = BASE_URL + "/" + id;
    }
    try {
        const response = await fetch(BASE_URL, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

const index = async () => {
    const response = await helperFunction(null);
    return response;
};

const show = async (id) => {
    const response = await helperFunction(id);
    return response;
};

export { index, show };
