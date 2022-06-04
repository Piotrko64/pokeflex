import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
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
