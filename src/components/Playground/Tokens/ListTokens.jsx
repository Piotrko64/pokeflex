import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import ItemToken from "./ItemToken";

const List = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 320px;
`;

function ListTokens({ list, AI }) {
    return (
        <List>
            <AnimatePresence>
                {list.map((el, i) => (
                    <ItemToken item={el} key={el.id} AI={AI} />
                ))}
            </AnimatePresence>
        </List>
    );
}
export default ListTokens;
