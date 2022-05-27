import { startPokemons, startTokens } from "../data/startItems";
import { addFromLocalStorage } from "./functionsForReducer/addFromLocalStorage";

const yourItems = {
    Pokemons: [...startPokemons],
    Tokens: [...startTokens],
    TeamFight: [],
    TokensFight: [],
};

const YourItemsReducer = (state = yourItems, action) => {
    switch (action.type) {
        case "addItemsFromLocalStorage":
            return addFromLocalStorage(state);

        default:
            return state;
    }
};

export default YourItemsReducer;
