import { examplePokemons } from "../../../../data/examplePokemons";
import OnePokemonScroll from "./OnePokemonScroll";

import ScrollListComponent from "../ScrollListComponent";

export default function ListScrollPoke() {
    return (
        <ScrollListComponent>
            {examplePokemons.map((el) => (
                <OnePokemonScroll key={el} value={el} />
            ))}
        </ScrollListComponent>
    );
}
