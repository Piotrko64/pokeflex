import { examplePokemons } from "../data/examplePokemons";

const stateFight = {
    myTeam: [examplePokemons[3], examplePokemons[4], examplePokemons[5]],
    enemyTeam: [examplePokemons[0], examplePokemons[7], examplePokemons[1]],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
    whereIsEnemy: [],
    allCoordinates: [],
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
                        Me.defense++;

                        break;

                    case "Grass":
                        Me.hp += Enemy.revenge;

                        break;
                    case "Normal":
                        stateAfterFightFriends = [...stateAfterFightFriends].map((e) => ({
                            ...e,
                            hp: e.hp++,
                        }));
                        console.log(
                            [...stateAfterFightFriends].map((e) => ({
                                ...e,
                                hp: e.hp++,
                            }))
                        );
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
                stateAfterFightFriends = stateAfterFightFriends.filter((s) => s.id !== Me.id);
            } else {
                stateAfterFightFriends[MeIndex] = Me;
            }
            if (Enemy.hp < 1) {
                stateAfterFightEnemy = stateAfterFightEnemy.filter((enemy) => enemy.id !== Enemy.id);
            } else {
                stateAfterFightEnemy[EnemyIndex] = Enemy;
            }
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
    };
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
        default:
            return state;
    }
};
export default FriendReducer;
