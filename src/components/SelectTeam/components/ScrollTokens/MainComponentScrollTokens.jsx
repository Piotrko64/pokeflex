import React, { Fragment } from "react";
import TitleScroll from "../TitleScroll";
import ListScrollTokens from "./ListScrollTokens";

const MainComponentScrollTokens = () => {
    return (
        <Fragment>
            <TitleScroll title="Your Tokens" />
            <ListScrollTokens />
        </Fragment>
    );
};

export default MainComponentScrollTokens;
