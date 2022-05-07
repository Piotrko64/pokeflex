export const attack = (id) => {
    return {
        type: "attack",
        payload: id,
    };
};
export const chooseEnemy = (id) => {
    return {
        type: "chooseEnemy",
        payload: id,
    };
};

export const fight = () => {
    return {
        type: "fight",
    };
};
export const whereIAm = (id) => {
    return {
        type: "whereIAm",
        payload: id,
    };
};

export const whereIsEnemy = (id) => {
    return {
        type: "whereIsEnemy",
        payload: id,
    };
};

export const friendDiv = (div) => {
    return {
        type: "friendDiv",
        payload: div,
    };
};
