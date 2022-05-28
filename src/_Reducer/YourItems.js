import { startPokemons, startTokens } from "../data/startItems";
import { addFromLocalStorage } from "./functionsForReducer/addFromLocalStorage";

const yourItems = {
    Pokemons: [...startPokemons],
    Tokens: [...startTokens],
    TeamFight: JSON.parse(localStorage.getItem("teamFight")) || [...startPokemons.slice(0, 3)],
    TokensFight: JSON.parse(localStorage.getItem("tokensFight")) || [...startTokens.slice(0, 3)],
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
