import { examplePokemons } from "../data/examplePokemons";

const stateFight = {
    myTeam: [examplePokemons[0], examplePokemons[1], examplePokemons[3]],
    enemyTeam: [examplePokemons[2], examplePokemons[4], examplePokemons[5]],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
};
let whoAttack = "";
let whoAttackID = "";
let whoIsAttack = "";
let whoIsAttackID = "";
const FriendReducer = (state = stateFight, action) => {
    switch (action.type) {
        // case "attack":
        //     let whoAttack;
        //     let whoAttackID;

        //     state.myTeam.forEach((e) => {
        //         if (e.id === action.payload) {
        //             whoAttack = e.name;
        //             whoAttackID = e.id;
        //         }
        //     });

        //     return { ...state, whoAttack, whoAttackID };

        case "choose":
            let Me;
            let Enemy;
            let MeIndex;
            let Choosing = false;
            let EnemyIndex;
            let stateAfterFightEnemy = [...state.enemyTeam];
            let stateAfterFightFriends = [...state.myTeam];
            state.myTeam.forEach((e) => {
                if (e.id === action.payload) {
                    whoAttack = e.name;
                    whoAttackID = e.id;
                    Choosing = true;
                }
            });
            if (Choosing) {
                return { ...state, whoAttack, whoAttackID };
            }
            state.enemyTeam.forEach((e) => {
                if (e.id === action.payload) {
                    whoIsAttack = e.name;
                    whoIsAttackID = e.id;

                    state.myTeam.forEach((f, fi) => {
                        if (f.id === state.whoAttackID) {
                            console.log(f);
                            Me = { ...f };
                            MeIndex = fi;
                            console.log(Me);
                        }
                    });
                    state.enemyTeam.forEach((en, i) => {
                        console.log(state.whoIsAttackID);
                        if (en.id === e.id) {
                            Enemy = { ...en };

                            EnemyIndex = i;
                            console.log(Enemy);
                        }
                    });
                    console.log(Me, Enemy);
                    if (Me.hp > Me.speed) {
                        Enemy.hp = Math.max(0, Enemy.hp - Me.attack) || 0;
                    } else {
                        Enemy.hp = Math.max(0, Enemy.hp - Me.Specialattack) || 0;
                    }

                    // TYPE
                    if (Me.type === "Turbo Fire") {
                        Enemy.hp = Math.max(0, Enemy.hp - 4) || 0;
                        Me.type = "Fire";
                    } else if (Enemy.defense === 0) {
                        switch (Me.type) {
                            case "Electro":
                                console.log("DZDZ");
                                Me.revenge++;
                                break;
                            case "Fire":
                                Me.type = "Turbo Fire";
                                break;

                            case "Water":
                                state.myTeam.forEach((el) => {
                                    el.hp++;
                                });

                                break;
                            default:
                                return;
                        }
                    }

                    Enemy.defense = Math.max(0, Enemy.defense - 1);
                    Me.hp -= Enemy.revenge;

                    stateAfterFightEnemy[EnemyIndex] = Enemy;
                    stateAfterFightFriends[MeIndex] = Me;
                }
            });

            return {
                ...state,
                myTeam: stateAfterFightFriends,
                enemyTeam: stateAfterFightEnemy,
                whoAttack: "",
                whoAttackID: "",
                whoIsAttack: "",
                whoIsAttackID: "",
            };

        // case "chooseEnemy":
        //     let whoIsAttack = "";
        //     let whoIsAttackID = "";
        //     let A = "";
        //     let B = "";
        //     state.myTeam.forEach((e) => {
        //         if (e.id === action.payload) {
        //             A = e.name;
        //             B = e.id;
        //         }
        //     });
        //     state.enemyTeam.forEach((e) => {
        //         if (e.id === action.payload) {
        //             whoIsAttack = e.name;
        //             whoIsAttackID = e.id;
        //             A = state.whoAttack;
        //             B = state.whoAttackID;
        //         }
        //     });

        //     return { ...state, whoAttack: A, whoAttackID: B, whoIsAttack, whoIsAttackID };

        // case "fight":
        //     //
        //     break;
        default:
            return state;
    }
};
export default FriendReducer;
