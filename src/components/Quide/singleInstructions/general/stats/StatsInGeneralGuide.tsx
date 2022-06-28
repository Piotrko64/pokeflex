import React from "react";
import styled from "styled-components";
import dataForStats from "./dataForStats";
import OneStat from "./OneStat";

const ListStats = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`;

const StatsInGeneralGuide = () => {
    return (
        <>
            <h1>Stats</h1>
            <ListStats>
                {dataForStats.map((el) => (
                    <OneStat stat={el} key={el.name} />
                ))}
            </ListStats>
        </>
    );
};

export default StatsInGeneralGuide;
