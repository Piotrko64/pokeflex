import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "./BackButton";

const MainComponentLayoutRouting = ({ children }) => {
    const location = useLocation();

    return (
        <Fragment>
            {location.pathname !== "/" && <BackButton />}

            {children}
        </Fragment>
    );
};

export default MainComponentLayoutRouting;
