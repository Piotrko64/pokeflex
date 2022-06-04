import styled from "styled-components";
import { BsFillHeartFill, BsFillShieldFill } from "react-icons/bs";
import { GiBroadsword, GiZeusSword, GiSpikes } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
import { keyframes } from "styled-components";
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
        if (props.df === 0) return "#cccccc";
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
const Electro = styled.div`
    background-color: rgba(255, 224, 143, 1);
    background-image: linear-gradient(
        141deg,
        rgba(255, 224, 143, 1) 0%,
        rgba(175, 133, 68, 1) 20%,
        rgba(179, 112, 44, 1) 77%,
        rgba(255, 224, 180, 1) 100%
    );
`;

const Fire = styled.div`
    background-color: rgba(255, 0, 0, 1);
    background-image: linear-gradient(
        181deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(125, 30, 30, 1) 0%,
        rgba(193, 147, 95, 1) 100%,
        rgba(239, 176, 110, 1) 100%
    );
`;

const TurboFire = styled.div`
    background: rgb(255, 0, 0);
    background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 19%,
        rgba(101, 5, 16, 1) 50%,
        rgba(255, 70, 0, 1) 100%
    );
`;

const Grass = styled.div`
    background: rgb(58, 172, 47);
    background: linear-gradient(
        106deg,
        rgba(58, 172, 47, 1) 0%,
        rgba(58, 97, 4, 1) 48%,

        rgba(146, 203, 2, 1) 100%
    );
`;
const Water = styled.div`
    background: rgb(37, 186, 209);
    background: linear-gradient(180deg, rgba(37, 186, 209, 1) 24%, rgba(44, 34, 221, 1) 84%);
`;

const Normal = styled.div`
    background: rgb(107, 39, 70);
    background: linear-gradient(90deg, rgba(107, 39, 70, 1) 0%, rgba(45, 80, 117, 1) 100%);
`;

const Blocked = styled.div`
    background: rgb(156, 156, 156);
    background: linear-gradient(
        137deg,
        rgba(156, 156, 156, 1) 8%,
        rgba(42, 22, 24, 1) 45%,
        rgba(126, 120, 117, 1) 91%
    );
`;
const Psychic = styled.div`
    background: rgb(199, 28, 63);
    background: radial-gradient(circle, rgba(199, 28, 63, 1) 35%, rgba(24, 51, 187, 1) 96%);
`;
const Rock = styled.div`
    background: rgb(135, 135, 135);
    background: linear-gradient(90deg, rgba(135, 135, 135, 1) 0%, rgba(25, 30, 36, 1) 100%);
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