import ScrollListComponent from "../ScrollListComponent";
import { allTokens } from "../../../../data/allTokens";
import ItemToken from "../../../Playground/Tokens/ItemToken";
import OneTokenScroll from "./OneTokenScroll";

export default function ListScrollTokens() {
    return (
        <ScrollListComponent>
            {allTokens.map((el) => (
                <OneTokenScroll key={el} item={el} noBattle />
            ))}
        </ScrollListComponent>
    );
}
