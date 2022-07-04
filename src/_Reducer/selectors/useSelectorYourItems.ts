import { useSelector } from "react-redux";
import { AllStateReducer } from "../../@types/_Reducer/AllStateReducer";

export const useSelectorYourItems = () => {
    const pokemons = useSelector((state: AllStateReducer) => state.YourItemsReducer.pokemons);
    const tokens = useSelector((state: AllStateReducer) => state.YourItemsReducer.tokens);
    const teamFight = useSelector((state: AllStateReducer) => state.YourItemsReducer.teamFight);
    const tokensFight = useSelector((state: AllStateReducer) => state.YourItemsReducer.tokensFight);

    return { pokemons, tokens, teamFight, tokensFight };
};
