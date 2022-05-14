import lighter from "../functions/powerTokens/lighter";

// Import Icons
import { BsFillHeartFill } from "react-icons/bs";
import { GiCat, GiWaterFountain, GiBlackHandShield, GiLighter, GiDeadlyStrike } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";

// function for roken
import electroAction from "../functions/powerTokens/electroaction";
import uninvitedGuest from "../functions/powerTokens/uninvitedguest";
import fountain from "../functions/powerTokens/fountain";
import sacrifice from "../functions/powerTokens/sacrifice";
import resurrection from "../functions/powerTokens/resurrection";

import { v4 } from "uuid";

export const allTokens = [
    {
        id: v4(),
        name: "Lighter",
        icon: <GiLighter />,
        functionToken: lighter,
        desc: "All your characters receive 'Turbo Fire' type and +5 to speed",
    },
    {
        id: v4(),
        name: "Electro Action",
        icon: <AiOutlineThunderbolt />,
        functionToken: electroAction,
        desc: "Deal 7 points to the weakest enemy character. If you have at least one 'Electro' character, deal 14 points to the strongest enemy character",
    },
    {
        id: v4(),
        name: "Univinted Guest",
        icon: <GiCat />,
        functionToken: uninvitedGuest,
    },
    {
        id: v4(),
        name: "Fountain",
        icon: <GiWaterFountain />,
        functionToken: fountain,
    },
    {
        id: v4(),
        name: "Sacrifice",
        icon: <GiDeadlyStrike />,
        functionToken: sacrifice,
    },
    {
        id: v4(),
        name: "Resurrection",
        icon: <GiBlackHandShield />,
        functionToken: resurrection,
    },
];
