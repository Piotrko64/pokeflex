import { useDispatch } from "react-redux";
import styled from "styled-components";
import { OneTokenInterface } from "../../../../@types/pokemonTokenData/TokenInterface";

import { useSelectorYourItems } from "../../../../_Reducer/selectors/useSelectorYourItems";
import { addToTeamToken } from "../../../../_Reducer/YourItems";

import { ItemToken } from "../../../Playground/Tokens/ItemToken";

const Token = styled.div`
    padding: 10px;
    transition: all 0.3s ease;
    filter: ${(props: { choose: boolean; scroll?: boolean }) =>
        props.choose && props.scroll && "contrast(0.2)"};
`;

export function OneTokenScroll({
    item,
    scroll,
}: {
    noBattle?: boolean;
    item: OneTokenInterface;
    scroll?: boolean;
}) {
    const dispatch = useDispatch();
    const { tokensFight } = useSelectorYourItems();

    return (
        <Token
            onClick={() => dispatch(addToTeamToken(item))}
            choose={tokensFight.some((e: OneTokenInterface) => e.name === item.name)}
            scroll={scroll}
        >
            <ItemToken item={item} noBattle />
        </Token>
    );
}
