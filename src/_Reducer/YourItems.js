import { startPokemons, startTokens } from "../data/startItems";
import { deleteFromTeamFn } from "./functionsForReducer/YourItems/deleteFromTeam";
import { addFromLocalStorageFn } from "./functionsForReducer/YourItems/addFromLocalStorage";
import { addToTeamFn } from "./functionsForReducer/YourItems/addToTeam";
import { addToTeamTokenFn } from "./functionsForReducer/YourItems/addToTeamToken";
import { deleteFromTeamTokenFn } from "./functionsForReducer/YourItems/deleteFromTeamToken";
import findTokensLocal from "./helpers/findTokensLocal";
import { addNewTokenFn } from "./functionsForReducer/YourItems/addNewToken";
import { createSlice, current } from "@reduxjs/toolkit";

const yourItems = {
    pokemons: [...startPokemons],
    tokens: [...startTokens],
    teamFight: JSON.parse(localStorage.getItem("pokemons")) || [...startPokemons.slice(0, 3)],
    tokensFight: findTokensLocal(),
};

const SliceYourItems = createSlice({
    name: "Settings",
    initialState: yourItems,
    reducers: {
        addItemsFromLocalStorage: (state) => {
            return addFromLocalStorageFn(current(state));
        },
        deleteFromTeam: (state, action) => {
            return deleteFromTeamFn(current(state), action.payload);
        },
        deleteFromTeamToken: (state, action) => {
            return deleteFromTeamTokenFn(current(state), action.payload);
        },
        addToTeam: (state, action) => {
            return addToTeamFn(current(state), action.payload);
        },
        addToTeamToken: (state, action) => {
            return addToTeamTokenFn(current(state), action.payload);
        },
        addNewToken: (state, action) => {
            return addNewTokenFn(current(state), action.payload);
        },
    },
});
const YourItemsReducer = SliceYourItems.reducer;
export const {
    addItemsFromLocalStorage,
    deleteFromTeam,
    deleteFromTeamToken,
    addToTeam,
    addToTeamToken,
    addNewToken,
} = SliceYourItems.actions;
export default YourItemsReducer;
