import { OnePokemonScroll } from "./OnePokemonScroll";
import { ScrollListComponent } from "../ScrollListComponent";
import { useSelectorYourItems } from "../../../../_Reducer/selectors/useSelectorYourItems";
import { PokemonInterface } from "../../../../@types/pokemonTokenData/PokemonInterface";

export function ListScrollPoke() {
    const { pokemons } = useSelectorYourItems();
    return (
        <ScrollListComponent>
            <>
                {pokemons.map((pokemon: PokemonInterface) => (
                    <OnePokemonScroll key={pokemon.id} value={pokemon} />
                ))}
            </>
        </ScrollListComponent>
    );
}
