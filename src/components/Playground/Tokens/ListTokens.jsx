import styled from "styled-components";
import ItemToken from "./ItemToken";

const List = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

function ListTokens({ list }) {
    return (
        <List>
            {list.map((el, i) => (
                <ItemToken item={el} key={el.id} />
            ))}
        </List>
    );
}
export default ListTokens;
