import { useDispatch } from "react-redux";
import styled from "styled-components";
import { oneTokenInterface } from "../../../../types/pokemonTokenData/tokenInterface";

import UseSelectorYourItems from "../../../../_Reducer/selectors/useSelectorYourItems";
import { addToTeamToken } from "../../../../_Reducer/YourItems";

import { ItemToken } from "../../../Playground/Tokens/ItemToken";

const Token = styled.div`
    padding: 10px;
    transition: all 0.3s ease;
    filter: ${(props: { choose: boolean; scroll?: boolean }) =>
        props.choose && props.scroll && "contrast(0.2)"};
`;

export default function OneTokenScroll({
    item,
    scroll,
}: {
    noBattle?: boolean;
    item: oneTokenInterface;
    scroll?: boolean;
}) {
    const dispatch = useDispatch();
    const { tokensFight } = UseSelectorYourItems();

    return (
        <Token
            onClick={() => dispatch(addToTeamToken(item))}
            choose={tokensFight.some((e: oneTokenInterface) => e.name === item.name)}
            scroll={scroll}
        >
            <ItemToken item={item} noBattle />
        </Token>
    );
}
