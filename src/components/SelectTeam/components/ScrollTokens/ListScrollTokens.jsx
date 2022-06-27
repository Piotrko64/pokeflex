import ScrollListComponent from "../ScrollListComponent";
import OneTokenScroll from "./OneTokenScroll";
import UseSelectorYourItems from "../../../../_Reducer/selectors/useSelectorYourItems";

export default function ListScrollTokens() {
    const { tokens } = UseSelectorYourItems();

    return (
        <ScrollListComponent>
            {tokens.map((el) => (
                <OneTokenScroll key={el.id} item={el} noBattle scroll />
            ))}
        </ScrollListComponent>
    );
}
