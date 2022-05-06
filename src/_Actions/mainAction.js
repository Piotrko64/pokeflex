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
