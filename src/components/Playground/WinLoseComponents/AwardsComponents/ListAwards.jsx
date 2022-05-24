import styled from "styled-components";
import Confetti from "react-confetti";
import { Fragment, useEffect } from "react";
import ListTokenAwards from "./ListTokenAwards";

function ListAwards({ tokens }) {
    return (
        <Fragment>
            <ListTokenAwards tokens={tokens} />
        </Fragment>
    );
}
export default ListAwards;
