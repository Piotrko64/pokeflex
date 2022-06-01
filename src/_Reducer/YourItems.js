import { startPokemons, startTokens } from "../data/startItems";
import { deleteFromTeam } from "./functionsForReducer/YourItems/deleteFromTeam";
import { addFromLocalStorage } from "./functionsForReducer/YourItems/addFromLocalStorage";
import { addToTeam } from "./functionsForReducer/YourItems/addToTeam";
import { addToTeamToken } from "./functionsForReducer/YourItems/addToTeamToken";
import { deleteFromTeamToken } from "./functionsForReducer/YourItems/deleteFromTeamToken";

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
        case "deleteFromTeam":
            return deleteFromTeam(state, action.payload);
        case "deleteFromTeamToken":
            return deleteFromTeamToken(state, action.payload);
        case "addToTeam":
            return addToTeam(state, action.payload);
        case "addToTeamToken":
            return addToTeamToken(state, action.payload);
        default:
            return state;
    }
};

export default YourItemsReducer;
