import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToTeamToken } from "../../../../_Actions/mainAction";
import ItemToken from "../../../Playground/Tokens/ItemToken";

const Token = styled.div`
    padding: 10px;
`;

export default function OneTokenScroll({ item, noBattle }) {
    const dispatch = useDispatch();
    return (
        <Token onClick={() => dispatch(addToTeamToken(item))}>
            <ItemToken item={item} noBattle={noBattle} />
        </Token>
    );
}
