import styled from "styled-components";
import ItemToken from "../../../Playground/Tokens/ItemToken";

const Token = styled.div`
    padding: 0 20px;
`;

export default function OneTokenScroll({ item, noBattle }) {
    return (
        <Token>
            <ItemToken item={item} noBattle />
        </Token>
    );
}
