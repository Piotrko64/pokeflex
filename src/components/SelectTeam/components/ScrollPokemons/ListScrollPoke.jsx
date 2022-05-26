import { render } from "react-dom";
import { examplePokemons } from "../../../../data/examplePokemons";

export default function ListScrollPoke() {
    render(<>{examplePokemons.map((el) => el)}</>);
}
