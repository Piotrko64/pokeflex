import { allTokens } from "../data/dataTokens/allTokens";
import { examplePokemons } from "../data/examplePokemons";
import { startPokemons, startTokens } from "../data/startItems";
import chooseAndFight from "./functionsForReducer/chooseAndFight";
import stateAfterToken from "./functionsForReducer/stateAfterToken";
import stateAfterTokenAI from "./functionsForReducer/stateAfterTokenAI";
import findTokensLocal from "./helpers/findTokensLocal";
const stateFight = {
    myTeam: JSON.parse(localStorage.getItem("pokemons")) || startPokemons.slice(0, 3),
    enemyTeam: [examplePokemons[2]],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
    whereIsEnemy: [],
    allCoordinates: [],
    grave: [],
    myTokens: findTokensLocal(),
    enemyTokens: [allTokens[2]],
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

// const friendReducerSlice = createSlice({
//     name: "fight",
//     initialState: stateFight,
//     reducers: {
//         choose: (state, action) => {
//             chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
//         },
//     },
// });

export default FriendReducer;
