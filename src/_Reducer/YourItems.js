import { startPokemons, startTokens } from "../data/startItems";
import { deleteFromTeamFn } from "./functionsForReducer/YourItems/deleteFromTeam";
import { addFromLocalStorageFn } from "./functionsForReducer/YourItems/addFromLocalStorage";
import { addToTeamFn } from "./functionsForReducer/YourItems/addToTeam";
import { addToTeamTokenFn } from "./functionsForReducer/YourItems/addToTeamToken";
import { deleteFromTeamTokenFn } from "./functionsForReducer/YourItems/deleteFromTeamToken";
import findTokensLocal from "./helpers/findTokensLocal";
import { addNewTokenFn } from "./functionsForReducer/YourItems/addNewToken";
import { createSlice } from "@reduxjs/toolkit";

const yourItems = {
    Pokemons: [...startPokemons],
    Tokens: [...startTokens],
    TeamFight: JSON.parse(localStorage.getItem("pokemons")) || [...startPokemons.slice(0, 3)],
    TokensFight: findTokensLocal(),
};

const SliceYourItems = createSlice({
    name: "Settings",
    initialState: yourItems,
    reducers: {
        addItemsFromLocalStorage: (state) => {
            return addFromLocalStorageFn(state);
        },
        deleteFromTeam: (state, action) => {
            return deleteFromTeamFn(state, action.payload);
        },
        deleteFromTeamToken: (state, action) => {
            deleteFromTeamTokenFn(state, action.payload);
        },
        addToTeam: (state, action) => {
            return addToTeamFn(state, action.payload);
        },
        addToTeamToken: (state, action) => {
            addToTeamTokenFn(state, action.payload);
        },
        addNewToken: (state, action) => {
            return addNewTokenFn(state, action.payload);
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
