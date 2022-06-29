import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { ReadyPokemon } from "./ReadyPokemon";

import { ListTokens } from "./Tokens/ListTokens";
import { arrayPokemonInterface } from "../../types/pokemonTokenData/pokemonInterface";
import { arrayTokenInterface } from "../../types/pokemonTokenData/tokenInterface";

const PlayGround = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props: { AI: boolean }) => (!props.AI ? "column" : "column-reverse")};
`;
const GridForCards = styled.div`
    display: flex;
    justify-content: space-around;
`;
const Tokens = styled.div``;

function GroundForCards({
    pokemons,
    tokens,
    AI = false,
}: {
    pokemons: arrayPokemonInterface;
    tokens: arrayTokenInterface;
    AI?: boolean;
}) {
    return (
        <PlayGround AI={AI}>
            <GridForCards>
                <AnimatePresence>
                    {pokemons && pokemons.map((el) => <ReadyPokemon value={el} key={el.id} />)}
                </AnimatePresence>
            </GridForCards>

            <Tokens>
                <ListTokens list={tokens} AI={AI} />
            </Tokens>
        </PlayGround>
    );
}
export default GroundForCards;
