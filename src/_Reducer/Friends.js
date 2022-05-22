import { allTokens } from "../data/allTokens";
import { examplePokemons } from "../data/examplePokemons";
import chooseAndFight from "./functionsForReducer/chooseAndFight";
const stateFight = {
    myTeam: [examplePokemons[1], examplePokemons[2], examplePokemons[3]],
    enemyTeam: [examplePokemons[0], examplePokemons[7], examplePokemons[4]],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
    whereIsEnemy: [],
    allCoordinates: [],
    grave: [],
    myTokens: [allTokens[0], allTokens[6], allTokens[5]],
    enemyTokens: [allTokens[2], allTokens[3], allTokens[4]],
    yourTurn: true,
};

function stateAfterToken(state, id) {
    let newStateTokens = [...state.myTokens].filter((el) => el.id !== id);

    return { ...state, myTokens: newStateTokens, whoAttackID: "", yourTurn: !state.yourTurn };
}
function stateAfterTokenAi(state, id) {
    let newStateTokens = [...state.enemyTokens].filter((el) => el.id !== id);

    return {
        ...state,
        myTeam: state.myTeam,
        enemyTeam: state.enemyTeam,
        enemyTokens: newStateTokens,
        yourTurn: !state.yourTurn,
        whoAttackID: "",
    };
}
function pushNewCoordinate(state, id, coordinate) {
    let newCoordinate = [...state.allCoordinates].filter((el) => el.id !== id);
    newCoordinate = [{ id, coordinate }, ...newCoordinate];
    console.log(newCoordinate);
    return newCoordinate;
}
const FriendReducer = (state = stateFight, action) => {
    switch (action.type) {
        case "setEnemyTeam":
            return { ...state, enemyTeam: action.payload.team, enemyTokens: action.payload.tokens };
        case "setRandomPokemon":
            return chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
        case "choose":
            return chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
        case "computerMove":
            return chooseAndFight(state, action.payload, state.enemyTeam, state.myTeam, true);
        case "animation":
            return { ...state, whereIsEnemy: action.payload };

        case "noWhoAttack":
            return { ...state, whoAttackID: "" };

        case "pushCoordinate":
            const { id, coordinate } = action.payload;

            return { ...state, allCoordinates: pushNewCoordinate(state, id, coordinate) };
        case "tokenPowerUse":
            return stateAfterToken(action.payload.fun, action.payload.id);
        case "tokenPowerAi":
            return stateAfterTokenAi(action.payload.fun, action.payload.id);
        case "moveToGrave":
            let newStateEnemy = [...state.enemyTeam].filter((el) => el.id !== action.payload.id);
            let newStateFriends = [...state.myTeam].filter((el) => el.id !== action.payload.id);

            return {
                ...state,
                enemyTeam: newStateEnemy,
                myTeam: newStateFriends,
                grave: [...state.grave, action.payload],
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
