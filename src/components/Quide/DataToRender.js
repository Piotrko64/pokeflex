import AllPokemonsGuide from "./singleInstructions/AllPokemonsGuide";
import AllTokensGuide from "./singleInstructions/AllTokensGuide";

const ListObjectsToRender = [
    {
        name: "General",
        render: "General",
    },
    {
        name: "Pokemons",
        render: <AllPokemonsGuide />,
    },
    {
        name: "Tokens",
        render: <AllTokensGuide />,
    },
    {
        name: "Types",
        render: "Types",
    },
];
export default ListObjectsToRender;
