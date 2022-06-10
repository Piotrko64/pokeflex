import ScrollListComponent from "../ScrollListComponent";

import OneTokenScroll from "./OneTokenScroll";
import { useSelector } from "react-redux";

export default function ListScrollTokens() {
    const tokens = useSelector((state) => state.YourItemsReducer.tokens);

    return (
        <ScrollListComponent>
            {tokens.map((el) => (
                <OneTokenScroll key={el.id} item={el} noBattle scroll />
            ))}
        </ScrollListComponent>
    );
}
