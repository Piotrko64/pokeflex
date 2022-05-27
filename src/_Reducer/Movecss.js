import { examplePokemons } from "../data/examplePokemons";

const Coordinates = {
    Me: "",
    FriendDiv: null,
    Enemy: "",
};

const CoordinatesReducer = (state = Coordinates, action) => {
    switch (action.type) {
        case "whereIAm":
            return { ...state, Me: action.payload };
        case "whereIsEnemy":
            return { ...state, Enemy: action.payload };
        case "friendDiv":
            return { ...state, FriendDiv: action.payload };
        default:
            return state;
    }
};
export default CoordinatesReducer;
