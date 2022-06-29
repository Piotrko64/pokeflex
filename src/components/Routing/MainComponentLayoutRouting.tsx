import React, { Fragment } from "react";
import { Props } from "react-confetti";

import { BackButton } from "./BackButton";

export const MainComponentLayoutRouting = ({ children }: Props) => {
    return (
        <Fragment>
            <BackButton />

            {children}
        </Fragment>
    );
};
