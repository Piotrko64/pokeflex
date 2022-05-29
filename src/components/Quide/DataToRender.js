import AllPokemonsGuide from "./singleInstructions/pokemons/AllPokemonsGuide";
import AllTokensGuide from "./singleInstructions/tokens/AllTokensGuide";
import GeneralGuide from "./singleInstructions/GeneralGuide";
import { motion } from "framer-motion";
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
export default ListObjectsToRender.map((el) => ({
    ...el,
    render: (
        <motion.div
            key={el.name}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2 }}
            animate={{ opacity: 1 }}
        >
            {el.render}
        </motion.div>
    ),
}));
