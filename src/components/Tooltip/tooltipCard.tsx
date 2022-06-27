import { pokemonInterface } from "../../types/pokemonTokenData/pokemonInterface";
import CardPokemon from "../CardPokemon/CardPokemon";

function TooltipCard({ value }: { value: pokemonInterface }) {
    return (
        <>
            <CardPokemon value={value} versionMini />
        </>
    );
}
export default TooltipCard;
