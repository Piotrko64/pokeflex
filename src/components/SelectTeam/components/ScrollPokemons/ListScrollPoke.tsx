import OnePokemonScroll from "./OnePokemonScroll";
import ScrollListComponent from "../ScrollListComponent";
import UseSelectorYourItems from "../../../../_Reducer/selectors/useSelectorYourItems";
import { pokemonInterface } from "../../../../types/pokemonTokenData/pokemonInterface";

export default function ListScrollPoke() {
    const { pokemons } = UseSelectorYourItems();
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
