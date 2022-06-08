import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ToolTipComponent = styled.div`
    padding: 5px;
    text-align: justify;
    max-width: 200px;
    z-index: 99999999;
    h2 {
        margin: 0 auto;
        text-align: center;
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
            <p>
                <ReactMarkdown>{desc}</ReactMarkdown>
            </p>
        </ToolTipComponent>
    );
}
export default Tooltip;
