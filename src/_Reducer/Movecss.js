import { examplePokemons } from "../data/examplePokemons";

const Coordinates = {
    Me: [],
    FriendDiv: null,
    Enemy: [],
};

const CoordinatesReducer = (state = Coordinates, action) => {
    switch (action.type) {
        case "whereIAm":
            const { x, y } = action.payload;
            return { ...state, Me: [x, y] };
        case "whereIsEnemy":
            const { xE, yE } = action.payload;
            console.log({ ...state, Enemy: [xE, yE] });
            return { ...state, Enemy: [xE, yE] };
        case "friendDiv":
            console.log({ ...state, FriendDiv: action.payload });
            return { ...state, FriendDiv: action.payload };
        default:
            return state;
    }
};
export default CoordinatesReducer;
