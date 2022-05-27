import AllPokemonsGuide from "./singleInstructions/pokemons/AllPokemonsGuide";
import AllTokensGuide from "./singleInstructions/tokens/AllTokensGuide";
import GeneralGuide from "./singleInstructions/GeneralGuide";

const ListObjectsToRender = [
    {
        name: "General",
        render: <GeneralGuide />,
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
