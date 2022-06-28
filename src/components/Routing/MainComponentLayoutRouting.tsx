import React, { Fragment } from "react";
import { Props } from "react-confetti";

import { BackButton } from "./BackButton";

const MainComponentLayoutRouting = ({ children }: Props) => {
    return (
        <Fragment>
            <BackButton />

            {children}
        </Fragment>
    );
};

export default MainComponentLayoutRouting;
