import { examplePokemons } from "../data/examplePokemons";

const Coordinates = {
    Me: "",
    FriendDiv: null,
    Enemy: "",
};

const CoordinatesReducer = (state = Coordinates, action) => {
    switch (action.type) {
        case "whereIAm":
            console.log({ ...state, Me: action.payload });
            return { ...state, Me: action.payload };
        case "whereIsEnemy":
            console.log({ ...state, Enemy: action.payload });
            return { ...state, Enemy: action.payload };
        case "friendDiv":
            console.log({ ...state, FriendDiv: action.payload });
            return { ...state, FriendDiv: action.payload };
        default:
            return state;
    }
};
export default CoordinatesReducer;
