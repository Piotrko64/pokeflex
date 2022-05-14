import styled from "styled-components";

const ToolTipComponent = styled.div`
    padding: 5px;
    text-align: center;
    max-width: 200px;
    h2 {
        margin: 0 auto;
    }
    p {
        font-size: 1rem;
        margin: 0;
    }
    hr {
        margin: 5px auto;
    }
`;

function Tooltip({ title, desc }) {
    return (
        <ToolTipComponent>
            <h2>{title}</h2>
            <hr />
            <p>{desc}</p>
        </ToolTipComponent>
    );
}
export default Tooltip;
