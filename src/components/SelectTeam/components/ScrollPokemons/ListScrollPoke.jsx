import OnePokemonScroll from "./OnePokemonScroll";

import ScrollListComponent from "../ScrollListComponent";
import { useSelector } from "react-redux";

export default function ListScrollPoke() {
    const PokemonsTeam = useSelector((state) => state.YourItemsReducer.Pokemons);
    return (
        <ScrollListComponent>
            {PokemonsTeam.map((el) => (
                <OnePokemonScroll key={el} value={el} />
            ))}
        </ScrollListComponent>
    );
}
