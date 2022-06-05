import React from "react";
import styled from "styled-components";
import dataForStats from "./dataForStats";
import OneStat from "./OneStat";

const ListStats = styled.div``;

const StatsInGeneralGuide = () => {
    return (
        <ListStats>
            {dataForStats.map((el) => (
                <OneStat stat={el} key={el.name} />
            ))}
        </ListStats>
    );
};

export default StatsInGeneralGuide;
