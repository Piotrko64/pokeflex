import { stateFightInterface } from "./../types/_Reducer/stateFight";
import { createSlice } from "@reduxjs/toolkit";
import { startPokemons } from "../data/startItems";
import { chooseAndFight } from "./functionsForReducer/StateFights/chooseAndFight";
import { pushNewCoordinateFn } from "./functionsForReducer/StateFights/pushNewCoordinate";
import { stateAfterToken } from "./functionsForReducer/StateFights/stateAfterToken";
import { stateAfterTokenAI } from "./functionsForReducer/StateFights/stateAfterTokenAI";
import { findTokensLocal } from "./helpers/findTokensLocal";
const stateFight: stateFightInterface = {
    myTeam: JSON.parse(localStorage.getItem("pokemons")!) || startPokemons.slice(0, 3),
    enemyTeam: [],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
    whereIsEnemy: [],
    allCoordinates: [],
    grave: [],
    myTokens: findTokensLocal(),
    enemyTokens: [],
    yourTurn: true,
    whoWin: false,
};

const SliceStateFight = createSlice({
    name: "Settings",
    initialState: stateFight,
    reducers: {
        setEnemyTeam: (state, action) => {
            return {
                ...state,
                enemyTeam: action.payload[0],
                enemyTokens: action.payload[1],
                whoWin: "",
            };
        },
        setMyTeam: (state, action): any => {
            return {
                ...state,
                myTeam: action.payload[0],
                myTokens: action.payload[1],
                whoWin: "",
            };
        },
        setRandomPokemon: (state, action) => {
            return chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
        },
        choose: (state, action) => {
            return chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
        },
        computerMove: (state, action) => {
            return chooseAndFight(state, action.payload, state.enemyTeam, state.myTeam, true);
        },
        animation: (state, action) => {
            return { ...state, whereIsEnemy: action.payload };
        },
        noWhoAttack: (state) => {
            return { ...state, whoAttackID: "", yourTurn: true };
        },
        pushCoordinate: (state, action) => {
            const { id, coordinate, name } = action.payload;

            return { ...state, allCoordinates: pushNewCoordinateFn(state, id, coordinate, name) };
        },
        tokenPowerUse: (_, action) => {
            return stateAfterToken(action.payload[0], action.payload[1]);
        },
        tokenPowerAi: (_, action) => {
            return stateAfterTokenAI(action.payload[0], action.payload[1]);
        },
        moveToGrave: (state, action) => {
            let newStateEnemy = [...state.enemyTeam].filter((el) => el.id !== action.payload.id);
            let newStateFriends = [...state.myTeam].filter((el) => el.id !== action.payload.id);

            return {
                ...state,
                enemyTeam: newStateEnemy,
                myTeam: newStateFriends,
                grave: [...state.grave, action.payload],
            };
        },
        setWhoWin: (state, action) => {
            return {
                ...state,
                whoWin: action.payload,
                enemyTeam: [],
                myTeam: [],
                myTokens: [],
                enemyTokens: [],
                yourTurn: true,
                whoAttack: "",
                whoAttackID: "",
                whoIsAttack: "",
                whoIsAttackID: "",
                whereIsEnemy: [],
                grave: [],
            };
        },
    },
});

const StateFightsReducer = SliceStateFight.reducer;
export const {
    setEnemyTeam,
    setMyTeam,
    setRandomPokemon,
    choose,
    computerMove,
    animation,
    noWhoAttack,
    pushCoordinate,
    tokenPowerUse,
    tokenPowerAi,
    moveToGrave,
    setWhoWin,
} = SliceStateFight.actions;

export default StateFightsReducer;
