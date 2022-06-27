import { useSelector } from "react-redux";

const UseSelectorYourItems = () => {
    const PokemonsTeam = useSelector((state) => state.YourItemsReducer.pokemons);
    const tokens = useSelector((state) => state.YourItemsReducer.tokens);
    const PokemonsTeamSelect = useSelector((state) => state.YourItemsReducer.teamFight);
    const TokensTeamSelect = useSelector((state) => state.YourItemsReducer.tokensFight);

    return { PokemonsTeam, tokens, PokemonsTeamSelect, TokensTeamSelect };
};

export default UseSelectorYourItems;
