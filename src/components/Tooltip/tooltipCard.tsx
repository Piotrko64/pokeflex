import { PokemonInterface } from "../../types/pokemonTokenData/PokemonInterface";
import { CardPokemon } from "../CardPokemon/CardPokemon";

export function TooltipCard({ value }: { value: PokemonInterface }) {
    return (
        <>
            <CardPokemon value={value} versionMini />
        </>
    );
}
