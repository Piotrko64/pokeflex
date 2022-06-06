import { startPokemons } from "../data/startItems";
import chooseAndFight from "./functionsForReducer/StateFights/chooseAndFight";
import stateAfterToken from "./functionsForReducer/StateFights/stateAfterToken";
import stateAfterTokenAI from "./functionsForReducer/StateFights/stateAfterTokenAI";
import findTokensLocal from "./helpers/findTokensLocal";
const stateFight = {
    myTeam: JSON.parse(localStorage.getItem("pokemons")) || startPokemons.slice(0, 3),
    enemyTeam: false,
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

function pushNewCoordinate(state, id, coordinate, name) {
    let newCoordinate = [...state.allCoordinates].filter((el) => el.id !== id);

    newCoordinate = [{ id, coordinate, name }, ...newCoordinate];

    return newCoordinate;
}
const FriendReducer = (state = stateFight, action) => {
    switch (action.type) {
        case "setEnemyTeam":
            return {
                ...state,
                enemyTeam: action.payload.team,
                enemyTokens: action.payload.tokens,
                whoWin: "",
            };
        case "setMyTeam":
            return {
                ...state,
                myTeam: action.payload.team,
                myTokens: action.payload.tokens,
                whoWin: "",
            };
        case "setRandomPokemon":
            return chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
        case "choose":
            return chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
        case "computerMove":
            return chooseAndFight(state, action.payload, state.enemyTeam, state.myTeam, true);
        case "animation":
            return { ...state, whereIsEnemy: action.payload };

        case "noWhoAttack":
            return { ...state, whoAttackID: "", yourTurn: true };

        case "pushCoordinate":
            const { id, coordinate, name } = action.payload;

            return { ...state, allCoordinates: pushNewCoordinate(state, id, coordinate, name) };
        case "tokenPowerUse":
            return stateAfterToken(action.payload.fun, action.payload.id);
        case "tokenPowerAi":
            return stateAfterTokenAI(action.payload.fun, action.payload.id);
        case "moveToGrave":
            let newStateEnemy = [...state.enemyTeam].filter((el) => el.id !== action.payload.id);
            let newStateFriends = [...state.myTeam].filter((el) => el.id !== action.payload.id);

            return {
                ...state,
                enemyTeam: newStateEnemy,
                myTeam: newStateFriends,
                grave: [...state.grave, action.payload],
            };
        case "setWhoWin":
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
        default:
            return state;
    }
};

export default FriendReducer;
