import { startPokemons, startTokens } from "../data/startItems";
import { deleteFromTeam } from "./functionsForReducer/YourItems/deleteFromTeam";
import { addFromLocalStorage } from "./functionsForReducer/YourItems/addFromLocalStorage";
import { addToTeam } from "./functionsForReducer/YourItems/addToTeam";
import { addToTeamToken } from "./functionsForReducer/YourItems/addToTeamToken";
import { deleteFromTeamToken } from "./functionsForReducer/YourItems/deleteFromTeamToken";
import findTokensLocal from "./helpers/findTokensLocal";
import { addNewToken } from "./functionsForReducer/YourItems/addNewToken";

const yourItems = {
    Pokemons: [...startPokemons],
    Tokens: [...startTokens],
    TeamFight: JSON.parse(localStorage.getItem("pokemons")) || [...startPokemons.slice(0, 3)],
    TokensFight: findTokensLocal(),
};

const YourItemsReducer = (state = yourItems, action) => {
    switch (action.type) {
        case "addItemsFromLocalStorage":
            return addFromLocalStorage(state);
        case "deleteFromTeam":
            return deleteFromTeam(state, action.payload);
        case "deleteFromTeamToken":
            return deleteFromTeamToken(state, action.payload);
        case "addToTeam":
            return addToTeam(state, action.payload);
        case "addToTeamToken":
            return addToTeamToken(state, action.payload);
        case "addNewToken":
            return addNewToken(state, action.payload);
        // case "addNewToken":
        //     return addNewToken(state.action.payload);
        default:
            return state;
    }
};

export default YourItemsReducer;
