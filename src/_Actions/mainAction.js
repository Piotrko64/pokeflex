export const setEnemyTeam = (team, tokens) => {
    return {
        type: "setEnemyTeam",
        payload: {
            team,
            tokens,
        },
    };
};
export const setMyTeam = (team, tokens) => {
    return {
        type: "setMyTeam",
        payload: { team, tokens },
    };
};
export const choose = (id) => {
    return {
        type: "choose",
        payload: id,
    };
};

export const animation = ([x, y]) => {
    return {
        type: "animation",
        payload: [x, y],
    };
};
export const noWhoAttack = () => {
    return {
        type: "noWhoAttack",
    };
};
export const computerMove = (id) => {
    return {
        type: "computerMove",
        payload: id,
    };
};
export const pushCoordinate = (id, coordinate, name) => {
    return {
        type: "pushCoordinate",
        payload: { id, coordinate, name },
    };
};

export const tokenPowerUse = (functionToken, id) => {
    return {
        type: "tokenPowerUse",
        payload: { fun: functionToken, id: id },
    };
};
export const tokenPowerAi = (functionToken, id) => {
    return {
        type: "tokenPowerAi",
        payload: { fun: functionToken, id: id },
    };
};

export const moveToGrave = (pokemon) => {
    return {
        type: "moveToGrave",
        payload: pokemon,
    };
};

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

export const changeVolume = (volume) => {
    return {
        type: "changeVolume",
        payload: volume,
    };
};

export const setWhoWin = (Win) => {
    return {
        type: "setWhoWin",
        payload: Win,
    };
};
