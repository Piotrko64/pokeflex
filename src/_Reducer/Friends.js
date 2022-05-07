import { examplePokemons } from "../data/examplePokemons";

const stateFight = {
    myTeam: [examplePokemons[0], examplePokemons[1], examplePokemons[3]],
    enemyTeam: [examplePokemons[2], examplePokemons[4], examplePokemons[5]],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
};

const FriendReducer = (state = stateFight, action) => {
    switch (action.type) {
        case "attack":
            let whoAttack;
            let whoAttackID;

            window.state = state;
            state.myTeam.forEach((e) => {
                if (e.id === action.payload) {
                    whoAttack = e.name;
                    whoAttackID = e.id;
                }
            });

            return { ...state, whoAttack, whoAttackID };

        case "chooseEnemy":
            let whoIsAttack;
            let whoIsAttackID;

            state.enemyTeam.forEach((e) => {
                if (e.id === action.payload) {
                    whoIsAttack = e.name;
                    whoIsAttackID = e.id;
                }
            });
            return { ...state, whoIsAttack, whoIsAttackID };

        case "fight":
            let Me;
            let Enemy;
            let MeIndex;
            let EnemyIndex;
            state.myTeam.forEach((e, i) => {
                if (e.id === state.whoAttackID) {
                    Me = { ...e };
                    MeIndex = i;
                }
            });
            state.enemyTeam.forEach((e, i) => {
                if (e.id === state.whoIsAttackID) {
                    Enemy = { ...e };

                    EnemyIndex = i;
                }
            });

            Enemy.hp -= Me.attack;
            Enemy.defense -= 1;
            let stateAfterFightEnemy = [...state.enemyTeam];
            stateAfterFightEnemy[EnemyIndex] = Enemy;

            return {
                ...state,
                enemyTeam: stateAfterFightEnemy,
                whoAttack: "",
                whoAttackID: "",
                whoIsAttack: "",
                whoIsAttackID: "",
            };
        default:
            return state;
    }
};
export default FriendReducer;
