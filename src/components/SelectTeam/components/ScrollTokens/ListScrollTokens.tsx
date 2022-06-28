import ScrollListComponent from "../ScrollListComponent";
import OneTokenScroll from "./OneTokenScroll";
import UseSelectorYourItems from "../../../../_Reducer/selectors/useSelectorYourItems";
import { oneTokenInterface } from "../../../../types/pokemonTokenData/tokenInterface";

export default function ListScrollTokens() {
    const { tokens } = UseSelectorYourItems();

    return (
        <ScrollListComponent>
            {tokens.map((el: oneTokenInterface) => (
                <OneTokenScroll key={el.id} item={el} noBattle scroll />
            ))}
        </ScrollListComponent>
    );
}
