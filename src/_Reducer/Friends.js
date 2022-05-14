import { allTokens } from "../data/allTokens";
import { examplePokemons } from "../data/examplePokemons";

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
    myTokens: [allTokens[0], allTokens[5], allTokens[1]],
    enemyTokens: [allTokens[2], allTokens[3], allTokens[4]],
    yourTurn: true,
};
let whoAttack = "";
let whoAttackID = "";

function chooseAndFight(state, payload, teamFriends, teamEnemy, computer) {
    let Me;
    let Enemy;
    let MeIndex;
    let Choosing = false;
    let EnemyIndex;
    let stateAfterFightEnemy = [...teamEnemy];
    let stateAfterFightFriends = [...teamFriends];

    teamFriends.forEach((e) => {
        if (e.id === payload) {
            whoAttack = e.name;
            whoAttackID = e.id;
            Choosing = true;
        }
    });
    if (Choosing) {
        return { ...state, whoAttack, whoAttackID };
    }
    teamEnemy.forEach((e, i) => {
        if (e.id === payload) {
            Enemy = { ...e };

            EnemyIndex = i;
            teamFriends.forEach((f, fi) => {
                if (f.id === state.whoAttackID) {
                    Me = { ...f };
                    MeIndex = fi;
                }
            });

            if (Me.hp > Me.speed) {
                Enemy.hp = Math.max(0, Enemy.hp - Me.attack) || 0;
            } else {
                Enemy.hp = Math.max(0, Enemy.hp - Me.specialAttack) || 0;
            }

            // TYPE
            if (Me.type === "Turbo Fire") {
                Enemy.hp = Math.max(0, Enemy.hp - 3) || 0;
                Me.type = "Fire";
            } else if (Enemy.defense === 0) {
                switch (Me.type) {
                    case "Electro":
                        Me.revenge++;
                        break;
                    case "Fire":
                        Me.type = "Turbo Fire";
                        break;

                    case "Water":
                        // IT WORKS
                        stateAfterFightFriends = [...stateAfterFightFriends].map((e) => ({
                            ...e,
                            hp: e.hp + 1,
                        }));

                        break;

                    case "Grass":
                        Me.hp += Enemy.revenge;

                        break;
                    case "Normal":
                        Me.hp += 1;
                        Me.speed += 3;
                        break;
                    case "Psychic":
                        Me.type = Enemy.type;
                        Me.hp += 2;
                        break;
                    case "Block":
                        return;
                    default:
                        return;
                }
            }

            Enemy.defense = Math.max(0, Enemy.defense - 1);
            Me.hp -= Enemy.revenge;
            // DEAD
            // if (Me.hp < 1) {
            //     stateAfterFightFriends = stateAfterFightFriends.filter((s) => s.id !== Me.id);
            // } else {
            stateAfterFightFriends[MeIndex] = Me;
            // }
            // if (Enemy.hp < 1) {
            //     stateAfterFightEnemy = stateAfterFightEnemy.filter((enemy) => enemy.id !== Enemy.id);
            // } else {
            stateAfterFightEnemy[EnemyIndex] = Enemy;
            // }
        }
    });

    return {
        ...state,
        enemyTeam: computer ? stateAfterFightFriends : stateAfterFightEnemy,
        myTeam: computer ? stateAfterFightEnemy : stateAfterFightFriends,
        whoAttack: "",
        whoAttackID,
        whoIsAttack: "",
        whoIsAttackID: "",
        yourTurn: !state.yourTurn,
    };
}
function stateAfterToken(state, id) {
    let newStateTokens = [...state.myTokens].filter((el) => el.id !== id);
    console.log(id);
    return { ...state, myTokens: newStateTokens };
}
const FriendReducer = (state = stateFight, action) => {
    switch (action.type) {
        case "choose":
            return chooseAndFight(state, action.payload, state.myTeam, state.enemyTeam, false);
        case "computerMove":
            return chooseAndFight(state, action.payload, state.enemyTeam, state.myTeam, true);
        case "animation":
            return { ...state, whereIsEnemy: action.payload };

        case "noEnemy":
            return { ...state, whoIsAttack: "" };

        case "pushCoordinate":
            const { id, coordinate } = action.payload;

            return { ...state, allCoordinates: [...state.allCoordinates, { id, coordinate }] };
        case "tokenPowerUse":
            return stateAfterToken(action.payload.fun, action.payload.id);
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
