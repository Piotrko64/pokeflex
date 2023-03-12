import { TitleScroll } from "../TitleScroll";
import { ListScrollTokens } from "./ListScrollTokens";

const MainComponentScrollTokens = () => {
    return (
        <>
            <TitleScroll title="Your Tokens" />
            <ListScrollTokens />
        </>
    );
};

export default MainComponentScrollTokens;
