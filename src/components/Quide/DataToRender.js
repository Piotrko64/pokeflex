import AllPokemonsGuide from "./singleInstructions/AllPokemonsGuide";
import AllTokensGuide from "./singleInstructions/AllTokensGuide";

const ListObjectsToRender = [
    {
        name: "All Pokemons",
        render: <AllPokemonsGuide />,
    },
    {
        name: "All Tokens",
        render: <AllTokensGuide />,
    },
];
export default ListObjectsToRender;
