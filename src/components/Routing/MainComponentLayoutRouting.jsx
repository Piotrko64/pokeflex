import React, { Fragment } from "react";

import BackButton from "./BackButton";

const MainComponentLayoutRouting = ({ children }) => {
    return (
        <Fragment>
            <BackButton />

            {children}
        </Fragment>
    );
};

export default MainComponentLayoutRouting;
