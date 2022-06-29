import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { arrayTokenInterface } from "../../../types/pokemonTokenData/tokenInterface";
import { ItemToken } from "./ItemToken";

const List = styled.div`
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: clamp(350px, 25vw, 600px);
    height: 62px;
`;

export function ListTokens({ list, AI }: { list: arrayTokenInterface; AI?: boolean }) {
    return (
        <List>
            <AnimatePresence>
                {list.map((el) => {
                    return <ItemToken item={el} key={el.id} AI={AI} />;
                })}
            </AnimatePresence>
        </List>
    );
}
