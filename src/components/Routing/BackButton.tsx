import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelectorYourItems } from "../../_Reducer/selectors/useSelectorYourItems";
const Back = styled.div`
    border-radius: 10px;
    background: white;
    color: black;
    padding: 2px 15px;
    max-width: 75px;
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 999;
    display: ${({ path }: { path: boolean }) => path && "none"};
`;

export const BackButton = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const path = location.pathname;

    const { teamFight } = useSelectorYourItems();

    function navigateFn() {
        if (path.includes("levels")) {
            navigation("/ChooseLevel");
        } else if (path.includes("SelectTeam") && !teamFight.length) {
            alert("Please choose at least one pokemon");
        } else navigation("/");
    }

    return (
        <Back onClick={navigateFn} path={path === "/"}>
            <TiArrowBack />
        </Back>
    );
};
