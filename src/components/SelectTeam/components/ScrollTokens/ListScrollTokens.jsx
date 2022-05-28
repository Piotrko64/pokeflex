import ScrollListComponent from "../ScrollListComponent";
import { allTokens } from "../../../../data/allTokens";
import ItemToken from "../../../Playground/Tokens/ItemToken";
import OneTokenScroll from "./OneTokenScroll";
import { useSelector } from "react-redux";

export default function ListScrollTokens() {
    const Tokens = useSelector((state) => state.YourItemsReducer.Tokens);
    return (
        <ScrollListComponent>
            {Tokens.map((el) => (
                <OneTokenScroll key={el} item={el} noBattle />
            ))}
        </ScrollListComponent>
    );
}
