import { useSelector } from "react-redux";
import { allStateReducer } from "../../types/_Reducer/allStateReducer";

export const useSelectorYourItems = () => {
    const pokemons = useSelector((state: allStateReducer) => state.YourItemsReducer.pokemons);
    const tokens = useSelector((state: allStateReducer) => state.YourItemsReducer.tokens);
    const teamFight = useSelector((state: allStateReducer) => state.YourItemsReducer.teamFight);
    const tokensFight = useSelector((state: allStateReducer) => state.YourItemsReducer.tokensFight);

    return { pokemons, tokens, teamFight, tokensFight };
};
