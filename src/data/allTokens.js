import lighter from "../functions/powerTokens/lighter";

// Import Icons
import { BsFillHeartFill } from "react-icons/bs";
import {
    GiCat,
    GiWaterFountain,
    GiBlackHandShield,
    GiLighter,
    GiDeadlyStrike,
    GiCirclingFish,
} from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";

// function for roken
import electroAction from "../functions/powerTokens/electroaction";
import uninvitedGuest from "../functions/powerTokens/uninvitedguest";
import fountain from "../functions/powerTokens/fountain";
import sacrifice from "../functions/powerTokens/sacrifice";
import resurrection from "../functions/powerTokens/resurrection";

import { v4 } from "uuid";
import fishingRoad from "../functions/powerTokens/fishingRod";

export const allTokens = [
    {
        id: v4(),
        name: "Lighter",
        icon: <GiLighter />,
        functionToken: lighter,
        desc: "All your characters receive **Turbo Fire** type and **+5** to speed",
    },
    {
        id: v4(),
        name: "Electro Action",
        icon: <AiOutlineThunderbolt />,
        functionToken: electroAction,
        desc: "Deal **7** points to the weakest enemy character. If you have at least one **Electro** character, deal **14** points to the strongest enemy character",
    },
    {
        id: v4(),
        name: "Univinted Guest",
        icon: <GiCat />,
        functionToken: uninvitedGuest,
        desc: "Summon ***Meowth*** to your side",
    },
    {
        id: v4(),
        name: "Fountain",
        icon: <GiWaterFountain />,
        functionToken: fountain,
        desc: "Give your strongest pokemon **+13** hp and change its type to **Water**",
    },
    {
        id: v4(),
        name: "Sacrifice",
        icon: <GiDeadlyStrike />,
        functionToken: sacrifice,
        desc: "Take your Pokemon to the ***grave*** with the lightest special attack. Your Pokemon with the strongest **special attack** gains that Pokemon's **health** and **+25 speed**",
    },
    {
        id: v4(),
        name: "Resurrection",
        icon: <GiBlackHandShield />,
        functionToken: resurrection,
        desc: "A copy of the Pokemon that first appeared in the ***grave*** in this fight will appear in your field with **11hp**",
    },
    {
        id: v4(),
        idAward: "FR22twoMagiCarp",
        name: "Fishing Road",
        icon: <GiCirclingFish />,
        functionToken: fishingRoad,
        desc: "Summon two **Magikarp**",
    },
];
