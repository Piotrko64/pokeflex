const stateFriends = {
    myTeam: [
        {
            id: "Charmander060520221905",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            name: "Charmander",
            type: "Fire",
            hp: 38,
            attack: 5,
            specialAttack: 7,
            speed: 18,
            defense: 3,
            revenge: 0,
        },
        {
            id: "Pikachu060520221905",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            name: "Pikachu",
            type: "Electro",
            hp: 28,
            attack: 4,
            specialAttack: 8,
            speed: 22,
            defense: 1,
            revenge: 3,
        },
    ],
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
