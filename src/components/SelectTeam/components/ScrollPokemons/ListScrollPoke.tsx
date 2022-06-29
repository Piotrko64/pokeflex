import { OnePokemonScroll } from "./OnePokemonScroll";
import { ScrollListComponent } from "../ScrollListComponent";
import { useSelectorYourItems } from "../../../../_Reducer/selectors/useSelectorYourItems";
import { pokemonInterface } from "../../../../types/pokemonTokenData/pokemonInterface";

export function ListScrollPoke() {
    const { pokemons } = useSelectorYourItems();
    return (
        <ScrollListComponent>
            <>
                {pokemons.map((pokemon: pokemonInterface) => (
                    <OnePokemonScroll key={pokemon.id} value={pokemon} />
                ))}
            </>
        </ScrollListComponent>
    );
}
