export const addItemsFromLocalStorage = () => {
    return {
        type: "addItemsFromLocalStorage",
    };
};

export const deleteFromTeam = (id) => {
    return {
        type: "deleteFromTeam",
        payload: id,
    };
};

export const addToTeam = (pokemon) => {
    return {
        type: "addToTeam",
        payload: pokemon,
    };
};
export const deleteFromTeamToken = (id) => {
    return {
        type: "deleteFromTeamToken",
        payload: id,
    };
};

export const addToTeamToken = (token) => {
    return {
        type: "addToTeamToken",
        payload: token,
    };
};
export const addNewToken = (token) => {
    return {
        type: "addNewToken",
        payload: token,
    };
};
