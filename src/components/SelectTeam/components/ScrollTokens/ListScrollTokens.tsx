import { ScrollListComponent } from "../ScrollListComponent";
import { OneTokenScroll } from "./OneTokenScroll";
import { useSelectorYourItems } from "../../../../_Reducer/selectors/useSelectorYourItems";
import { oneTokenInterface } from "../../../../types/pokemonTokenData/tokenInterface";

export function ListScrollTokens() {
    const { tokens } = useSelectorYourItems();

    return (
        <ScrollListComponent>
            <>
                {tokens.map((el: oneTokenInterface) => (
                    <OneTokenScroll key={el.id} item={el} noBattle scroll />
                ))}
            </>
        </ScrollListComponent>
    );
}
