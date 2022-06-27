import { useSelector } from "react-redux";

const UseSelectorYourItems = () => {
    const pokemons = useSelector((state) => state.YourItemsReducer.pokemons);
    const tokens = useSelector((state) => state.YourItemsReducer.tokens);
    const teamFight = useSelector((state) => state.YourItemsReducer.teamFight);
    const tokensFight = useSelector((state) => state.YourItemsReducer.tokensFight);

    return { pokemons, tokens, teamFight, tokensFight };
};

export default UseSelectorYourItems;
