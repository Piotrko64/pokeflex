import styled from "styled-components";
import { BsFillHeartFill, BsFillShieldFill } from "react-icons/bs";
import { GiBroadsword, GiZeusSword, GiSpikes } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
const TableWithAll = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;
const GridStats = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 50px);
    color: white;
    grid-template-columns: repeat(2, 1fr);
    font-size: 28px;
    width: 90%;
`;
const OneStat = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: ${(props) => (props.isOdd ? "2px solid white" : "")};
    border-bottom: ${(props) => (props.isLastTwo ? "" : "2px solid white")};
    color: white;
    padding: 0 30px;
    font-family: "Koulen", cursive;
`;
const ImportantStat = styled.div`
    font-size: 45px;
    font-family: "Koulen", cursive;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
    text-shadow: 0px 0px 2px #000000;
`;
const Electro = styled(ImportantStat)`
    background-color: rgba(255, 224, 143, 1);
    background-image: linear-gradient(
        141deg,
        rgba(255, 224, 143, 1) 0%,
        rgba(175, 133, 68, 1) 20%,
        rgba(179, 112, 44, 1) 77%,
        rgba(255, 224, 180, 1) 100%
    );
`;

const Fire = styled(ImportantStat)`
    background-color: rgba(255, 0, 0, 1);
    background-image: linear-gradient(
        181deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(125, 30, 30, 1) 0%,
        rgba(193, 147, 95, 1) 100%,
        rgba(239, 176, 110, 1) 100%
    );
`;
////

function Stats(props) {
    const { name, type, hp, attack, specialAttack, defense, revenge, speed } = props.value;
    return (
        <>
            <TableWithAll>
                <ImportantStat>{name}</ImportantStat>
                <GridStats>
                    <div data-atropos-offset="5">
                        <OneStat isOdd>
                            {hp}
                            <BsFillHeartFill />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="5">
                        <OneStat>
                            {defense} <BsFillShieldFill />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="5">
                        <OneStat isOdd>
                            {attack}
                            <GiBroadsword />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="5">
                        <OneStat>
                            {specialAttack}
                            <GiZeusSword />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="5">
                        <OneStat isOdd isLastTwo>
                            {revenge}
                            <GiSpikes />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="5">
                        <OneStat isLastTwo>
                            {speed}
                            <RiSpeedFill />
                        </OneStat>
                    </div>
                </GridStats>
                {(() => {
                    switch (type) {
                        case "Electro":
                            return (
                                <>
                                    <Electro>{type}</Electro>
                                </>
                            );
                        case "Fire":
                            return (
                                <>
                                    <Fire>{type}</Fire>
                                </>
                            );
                        default:
                            return "XDD";
                    }
                })()}
                {/* <ImportantStat>{type}</ImportantStat> */}
            </TableWithAll>
        </>
    );
}

export default Stats;
