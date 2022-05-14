import lighter from "../functions/powerTokens/lighter";
import { BsFillHeartFill } from "react-icons/bs";
import { GiCat, GiWaterFountain, GiBlackHandShield } from "react-icons/gi";

import electroAction from "../functions/powerTokens/electroaction";
import uninvitedGuest from "../functions/powerTokens/uninvitedguest";
import fountain from "../functions/powerTokens/fountain";
import sacrifice from "../functions/powerTokens/sacrifice";
import resurrection from "../functions/powerTokens/resurrection";
export const allTokens = [
    {
        name: "Lighter",
        icon: <BsFillHeartFill />,
        functionToken: lighter,
    },
    {
        name: "Electro Action",
        icon: <BsFillHeartFill />,
        functionToken: electroAction,
    },
    {
        name: "Univinted Guest",
        icon: <GiCat />,
        functionToken: uninvitedGuest,
    },
    {
        name: "Fountain",
        icon: <GiWaterFountain />,
        functionToken: fountain,
    },
    {
        name: "Sacrifice",
        icon: <GiBlackHandShield />,
        functionToken: sacrifice,
    },
    {
        name: "Resurrection",
        icon: <GiBlackHandShield />,
        functionToken: resurrection,
    },
];
