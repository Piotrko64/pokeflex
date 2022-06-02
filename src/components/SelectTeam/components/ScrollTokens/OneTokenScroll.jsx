import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToTeamToken } from "../../../../_Actions/mainAction";
import ItemToken from "../../../Playground/Tokens/ItemToken";

const Token = styled.div`
    padding: 10px;
    transition: all 0.3s ease;
    filter: ${(props) => props.choose && props.scroll && "contrast(0.2)"};
`;

export default function OneTokenScroll({ item, noBattle, scroll }) {
    const dispatch = useDispatch();
    const tokensFight = useSelector((state) => state.YourItemsReducer.TokensFight);

    return (
        <Token
            onClick={() => dispatch(addToTeamToken(item))}
            choose={tokensFight.find((e) => e.name === item.name)}
            scroll={scroll}
        >
            <ItemToken item={item} noBattle={noBattle} />
        </Token>
    );
}
