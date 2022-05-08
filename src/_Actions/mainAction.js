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
export const noEnemy = () => {
    return {
        type: "noEnemy",
    };
};
export const computerMove = (id) => {
    return {
        type: "computerMove",
        payload: id,
    };
};
export const pushCoordinate = (id, coordinate) => {
    return {
        type: "pushCoordinate",
        payload: { id, coordinate },
    };
};
