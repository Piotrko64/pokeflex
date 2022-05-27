const yourItems = {
    Pokemons: "",
    Tokens: "",
    TeamFight: "",
    TokensFight: "",
};

const FriendReducer = (state = yourItems, action) => {
    switch (action.type) {
        case "addItemsFromLocalStorage":
            return { ...state, enemyTeam: action.payload.team, enemyTokens: action.payload.tokens };

        default:
            return state;
    }
};

export default FriendReducer;
