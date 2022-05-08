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
