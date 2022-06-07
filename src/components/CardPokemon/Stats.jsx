import styled from "styled-components";
import { BsFillHeartFill, BsFillShieldFill } from "react-icons/bs";
import { GiBroadsword, GiZeusSword, GiSpikes } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
import { keyframes } from "styled-components";
import { Blocked, Electro, Fire, Grass, Ice, Normal, Psychic, Rock, TurboFire, Water } from "./StylingStats";
const TableWithAll = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;
const GridStats = styled.div`
    display: grid;
    grid-auto-rows: 50px
    color: white;
    grid-template-columns: repeat(2,1fr);

    width: 90%;
`;
const OneStat = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-right: ${(props) => (props.isOdd ? "2px solid white" : "")};
    border-bottom: ${(props) => (props.isLastTwo ? "" : "2px solid white")};
    color: white;
    padding: ${(props) => (props.versionMini ? "0 30px" : "0 20px")};
    font-family: "Koulen", cursive;
    color: ${(props) => {
        if (props.df === 0) return "#c65101";
        if (props.hpLessThanSpeed) return "#ffba1f";
        if (props.hp < 8) return "#ff7070";
        if (props.rv === 0) return "#8f8f8f";
    }};
`;
const rotate = keyframes`
  0% {
        background-position: 0% 0%;
    }
    25% {
        background-position: 25% 100%;
    }
    75% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 0%;
    }
`;
const ImportantStat = styled.div`
    font-size: ${(props) => (props.versionMini ? "20px" : "35px")};
    font-family: "Koulen", cursive;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
    border-bottom-radius: 25px;
    text-shadow: 0px 0px 2px #000000;
    background-size: 125%;
    animation: ${rotate} 12s ease infinite;
`;

////

function Stats({ value, versionMini }) {
    const { name, type, hp, attack, specialAttack, defense, revenge, speed } = value;

    return (
        <>
            <TableWithAll>
                <ImportantStat versionMini={versionMini}>{name}</ImportantStat>
                <GridStats>
                    <div data-atropos-offset="3">
                        <OneStat isOdd hp={hp}>
                            {hp}
                            <BsFillHeartFill />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="3">
                        <OneStat df={defense}>
                            {defense} <BsFillShieldFill />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="3">
                        <OneStat isOdd>
                            {attack}
                            <GiBroadsword />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="3">
                        <OneStat hpLessThanSpeed={hp <= speed}>
                            {specialAttack}
                            <GiZeusSword />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="3">
                        <OneStat isOdd isLastTwo rv={revenge}>
                            {revenge}
                            <GiSpikes />
                        </OneStat>
                    </div>
                    <div data-atropos-offset="3">
                        <OneStat isLastTwo>
                            {speed}
                            <RiSpeedFill />
                        </OneStat>
                    </div>
                </GridStats>
                <ImportantStat versionMini={versionMini}>
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
                            case "Turbo Fire":
                                return (
                                    <>
                                        <TurboFire>{type}</TurboFire>
                                    </>
                                );
                            case "Grass":
                                return (
                                    <>
                                        <Grass>{type}</Grass>
                                    </>
                                );
                            case "Water":
                                return (
                                    <>
                                        <Water>{type}</Water>
                                    </>
                                );
                            case "Psychic":
                                return (
                                    <>
                                        <Psychic>{type}</Psychic>
                                    </>
                                );
                            case "Normal":
                                return <Normal>{type}</Normal>;
                            case "Rock":
                                return <Rock>{type}</Rock>;
                            case "Ice":
                                return (
                                    <>
                                        <Ice>{type}</Ice>
                                    </>
                                );
                            case "Blocked":
                                return (
                                    <>
                                        <Blocked>Blocked</Blocked>
                                    </>
                                );
                            default:
                                return <Normal>Normal</Normal>;
                        }
                    })()}
                </ImportantStat>
            </TableWithAll>
        </>
    );
}

export default Stats;
