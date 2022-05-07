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
export const whereIAm = (x, y) => {
    return {
        type: "whereIAm",
        payload: {
            x,
            y,
        },
    };
};

export const whereIsEnemy = (xE, yE) => {
    return {
        type: "whereIsEnemy",
        payload: {
            xE,
            yE,
        },
    };
};

export const friendDiv = (div) => {
    return {
        type: "friendDiv",
        payload: div,
    };
};
