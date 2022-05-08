import { examplePokemons } from "../data/examplePokemons";

const stateFight = {
    myTeam: [examplePokemons[2], examplePokemons[7], examplePokemons[5]],
    enemyTeam: [examplePokemons[0], examplePokemons[3], examplePokemons[4]],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
    whereIsEnemy: [],
};
let whoAttack = "";
let whoAttackID = "";
let whoIsAttack = "";
let whoIsAttackID = "";
function chooseAndFight(state, payload) {
    let Me;
    let Enemy;
    let MeIndex;
    let Choosing = false;
    let EnemyIndex;
    let stateAfterFightEnemy = [...state.enemyTeam];
    let stateAfterFightFriends = [...state.myTeam];
    state.myTeam.forEach((e) => {
        if (e.id === payload) {
            whoAttack = e.name;
            whoAttackID = e.id;
            Choosing = true;
        }
    });
    if (Choosing) {
        return { ...state, whoAttack, whoAttackID };
    }
    state.enemyTeam.forEach((e, i) => {
        if (e.id === payload) {
            Enemy = { ...e };

            EnemyIndex = i;
            state.myTeam.forEach((f, fi) => {
                if (f.id === state.whoAttackID) {
                    console.log(f);
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
                        state.myTeam.forEach((el) => {
                            el.hp++;
                        });

                        break;

                    case "Grass":
                        Me.defense++;

                        break;
                    case "Normal":
                        Me.hp += 2;

                        break;
                    default:
                        Me.hp += 2;
                        return;
                }
            }

            Enemy.defense = Math.max(0, Enemy.defense - 1);
            Me.hp -= Enemy.revenge;
            // DEAD
            if (Me.hp < 1) {
                console.log("MNIEJ");

                stateAfterFightFriends = stateAfterFightFriends.filter((s) => s.id !== Me.id);
            } else {
                stateAfterFightFriends[MeIndex] = Me;
            }
            if (Enemy.hp < 1) {
                console.log(Enemy, stateAfterFightEnemy);
                stateAfterFightEnemy = stateAfterFightEnemy.filter((enemy) => enemy.id !== Enemy.id);
                console.log(Enemy, stateAfterFightEnemy);
            } else {
                stateAfterFightEnemy[EnemyIndex] = Enemy;
            }
        }
    });

    return {
        ...state,
        myTeam: stateAfterFightFriends,
        enemyTeam: stateAfterFightEnemy,
        whoAttack: "",
        whoAttackID,
        whoIsAttack: "",
        whoIsAttackID: "",
    };
}
const FriendReducer = (state = stateFight, action) => {
    switch (action.type) {
        case "choose":
            return chooseAndFight(state, action.payload);
        case "animation":
            return { ...state, whereIsEnemy: action.payload };

        case "noEnemy":
            return { ...state, whoIsAttack: "" };
        default:
            return state;
    }
};
export default FriendReducer;
