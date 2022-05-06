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
            console.log(state.myTeam);
            console.log(state, action);
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
            console.log(state.enemyTeam);
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
                console.log(e);
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
            console.log(Enemy, Me);
            Enemy.hp -= Me.attack;
            let stateAfterFightEnemy = [...state.enemyTeam];
            stateAfterFightEnemy[EnemyIndex] = Enemy;
            console.log({ ...state, myTeam: stateAfterFightEnemy });

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
