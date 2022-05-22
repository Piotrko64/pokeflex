import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import ItemToken from "./ItemToken";

const List = styled.div`
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 600px;
    height: 62px;
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
