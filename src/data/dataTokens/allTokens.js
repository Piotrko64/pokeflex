import { v4 } from "uuid";
// function for roken
import electroAction from "../dataTokens/powerTokens/electroaction";
import uninvitedGuest from "../dataTokens/powerTokens/uninvitedguest";
import fountain from "../dataTokens/powerTokens/fountain";
import sacrifice from "../dataTokens/powerTokens/sacrifice";
import resurrection from "../dataTokens/powerTokens/resurrection";

import fishingRoad from "../dataTokens/powerTokens/fishingRod";
import conflagration from "../dataTokens/powerTokens/conflagration";
import highGrass from "../dataTokens/powerTokens/highGrass";
import punch from "../dataTokens/powerTokens/punch";
import lighter from "../dataTokens/powerTokens/lighter";

// Import Icons

import {
    GiCat,
    GiWaterFountain,
    GiBlackHandShield,
    GiLighter,
    GiDeadlyStrike,
    GiCirclingFish,
    GiFireWave,
    GiHighGrass,
    GiPunch,
    GiShieldcomb,
} from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import shieldStone from "./powerTokens/shieldStone";

export const allTokens = [
    {
        id: v4(),
        idAward: "Lighter44-fireChar7878",
        name: "Lighter",
        icon: <GiLighter />,
        functionToken: lighter,
        desc: "All your characters receive **Turbo Fire** type and **+5** to speed",
    },
    {
        id: v4(),
        idAward: "Electr444A4C546",
        name: "Electro Action",
        icon: <AiOutlineThunderbolt />,
        functionToken: electroAction,
        desc: "Deal **7** points to the weakest enemy character. If you have at least one **Electro** character, deal **16** points to the strongest enemy character",
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
        desc: "Give your strongest pokemon **+14** hp and change its type to **Water**",
    },
    {
        id: v4(),
        name: "Sacrifice",
        idAward: "Sa45Cri",
        icon: <GiDeadlyStrike />,
        badForAI: true,
        functionToken: sacrifice,
        desc: "Take your Pokemon to the ***grave*** with the lightest special attack. Your Pokemon with the strongest **special attack** gains that Pokemon's **health** and **+25 speed**",
    },
    {
        id: v4(),
        name: "Resurrection",
        badForAI: true,
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
    {
        id: v4(),

        name: "Conflagration",
        icon: <GiFireWave />,
        functionToken: conflagration,
        desc: "Deal **6** points of damage to all enemies",
    },
    {
        id: v4(),
        idAward: "HG4568GRa45s8",
        badForAI: true,
        name: "High Grass",
        icon: <GiHighGrass />,
        functionToken: highGrass,
        desc: "All your grass pokemons are blocked but They get **+3** points **revenge** and **defense**",
    },
    {
        id: v4(),
        idAward: "punch4352",
        name: "Punch",
        icon: <GiPunch />,
        functionToken: punch,
        desc: "Deal **14** damage random enemy pokemon",
    },
    {
        id: v4(),
        badForAI: true,
        name: "Shield Stone",
        icon: <GiShieldcomb />,
        functionToken: shieldStone,
        desc: "Give your stronger pokemon **+10 hp** and **+1 defense**",
    },
];

export function findTokenByName(name) {
    return { ...allTokens.find((el) => el.name === name), id: v4() };
}
