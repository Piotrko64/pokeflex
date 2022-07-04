import { ScrollListComponent } from "../ScrollListComponent";
import { OneTokenScroll } from "./OneTokenScroll";
import { useSelectorYourItems } from "../../../../_Reducer/selectors/useSelectorYourItems";
import { OneTokenInterface } from "../../../../@types/pokemonTokenData/TokenInterface";

export function ListScrollTokens() {
    const { tokens } = useSelectorYourItems();

    return (
        <ScrollListComponent>
            <>
                {tokens.map((el: OneTokenInterface) => (
                    <OneTokenScroll key={el.id} item={el} noBattle scroll />
                ))}
            </>
        </ScrollListComponent>
    );
}
