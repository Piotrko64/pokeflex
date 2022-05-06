import { examplePokemons } from "../data/examplePokemons";

const stateFriends = {
    myTeam: [...examplePokemons],
    whoAttack: "",
    whoAttackID: "",
    whoIsAttack: "",
    whoIsAttackID: "",
};

const FriendReducer = (state = stateFriends, action) => {
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
            state.myTeam.forEach((e) => {
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
                console.log("IDDDDD", e.id, state.whoIsAttackID);
                if (e.id === state.whoAttackID) {
                    Me = { ...e };
                    MeIndex = i;
                } else if (e.id === state.whoIsAttackID) {
                    Enemy = { ...e };

                    EnemyIndex = i;
                }
            });
            Enemy.hp -= Me.attack;
            let stateAfterFight = [...state.myTeam];
            stateAfterFight[EnemyIndex] = Enemy;
            console.log({ ...state, myTeam: stateAfterFight });

            return {
                ...state,
                myTeam: stateAfterFight,
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
