import OnePokemonScroll from "./OnePokemonScroll";
import ScrollListComponent from "../ScrollListComponent";
import UseSelectorYourItems from "../../../../_Reducer/selectors/useSelectorYourItems";

export default function ListScrollPoke() {
    const { PokemonsTeam } = UseSelectorYourItems();
    return (
        <ScrollListComponent>
            {PokemonsTeam.map((el) => (
                <OnePokemonScroll key={el.id} value={el} />
            ))}
        </ScrollListComponent>
    );
}
