import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const HPplus = styled.div`
    font-size: 16rem;
    color: rgba(179, 15, 15, 1);
    position: absolute;
    top: 0;
    z-index: 1000;
    text-shadow: 0px 0px 20px #ce0000;
`;
const HPminus = styled(HPplus)`
    color: #2c8a00;
    text-shadow: 0px 0px 14px #2c8a00;
`;

function AnimHP({ value }) {
    return !!value && (value < 0 ? <HPplus>{value}</HPplus> : <HPminus>{value}</HPminus>);
}
export default AnimHP;
