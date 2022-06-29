import { OnePokemonScroll } from "./OnePokemonScroll";
import { ScrollListComponent } from "../ScrollListComponent";
import { useSelectorYourItems } from "../../../../_Reducer/selectors/useSelectorYourItems";
import { pokemonInterface } from "../../../../types/pokemonTokenData/pokemonInterface";

export default function ListScrollPoke() {
    const { pokemons } = useSelectorYourItems();
    return (
        <ScrollListComponent>
            <>
                {pokemons.map((el: pokemonInterface) => (
                    <OnePokemonScroll key={el.id} value={el} />
                ))}
            </>
        </ScrollListComponent>
    );
}
