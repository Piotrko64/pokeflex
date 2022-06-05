import React from "react";
import ReactMarkdown from "react-markdown";

const OneStat = ({ stats }) => {
    const { icon, description, name } = stats;
    return (
        <>
            <h2>{icon + name + icon}</h2>
            <p>
                <ReactMarkdown>{description}</ReactMarkdown>
            </p>
        </>
    );
};

export default OneStat;
