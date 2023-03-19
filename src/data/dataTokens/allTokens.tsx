import { ArrayTokenInterface } from "../../@types/pokemonTokenData/TokenInterface";
import { v4 } from "uuid";
// function for roken
import electroAction from "./powerTokens/electroaction";
import uninvitedGuest from "./powerTokens/uninvitedguest";
import fountain from "./powerTokens/fountain";
import sacrifice from "./powerTokens/sacrifice";
import resurrection from "./powerTokens/resurrection";

import fishingRod from "./powerTokens/fishingRod";
import conflagration from "./powerTokens/conflagration";
import highGrass from "./powerTokens/highGrass";
import punch from "./powerTokens/punch";
import lighter from "./powerTokens/lighter";

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
    GiExtraTime,
    GiPunchBlast,
    GiRobber,
    GiBrutalHelm,
} from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import shieldStone from "./powerTokens/shieldStone";
import blizzard from "./powerTokens/blizzard";
import { BsBatteryFull, BsSnow } from "react-icons/bs";
import slow from "./powerTokens/slow";
import charging from "./powerTokens/charging";
import punchMachamp from "./powerTokens/punchMachamp";

import robber from "./powerTokens/robber";
import { ready } from "./powerTokens/ready";

export const allTokens: ArrayTokenInterface = [
    {
        id: v4(),
        idAward: "Bilzisa456",
        name: "Blizzard",
        icon: <BsSnow />,
        functionToken: blizzard,
        desc: "Reduce all enemy **hp** by **2** points and **speed** by **6** points",
    },
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
        desc: "Deal **7** points to the weakest enemy character. If you have at least one **Electro** or **Turbo Electro** character, deal **16** points to the strongest enemy character",
    },
    {
        id: v4(),
        idAward: "EREady6",
        name: "Ready",
        icon: <GiBrutalHelm />,
        functionToken: ready,
        desc: "Your pokemon's gain **1** point defense, **1** point revenge, **1**  point hp  and **5** points speed",
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
        idAward: "SLLSOlow",
        name: "Slow",
        badForAI: true,
        icon: <GiExtraTime />,
        functionToken: slow,
        desc: "All pokemons gain **7** hp and your pokemons get **7** points speed and **1** points of revenge",
    },
    {
        name: "Charging",
        idAward: "EleCHC546",
        badForAI: true,
        icon: <BsBatteryFull />,
        functionToken: charging,
        desc: "Your  Electro pokemon with most hp change  type on **Turbo Electro** and gain **+1** defense and **+9** hp",
    },
    {
        id: v4(),
        name: "Fountain",
        icon: <GiWaterFountain />,
        functionToken: fountain,
        desc: "Give your strongest pokemon **+16** hp and change its type to **Water**",
    },
    {
        id: v4(),
        name: "Sacrifice",
        idAward: "Sa45Cri",
        icon: <GiDeadlyStrike />,
        badForAI: true,
        functionToken: sacrifice,
        desc: "Take your Pokemon to the ***grave*** with the lightest special attack. Your Pokemon with the strongest **special attack** gains that Pokemon's **health**, **+10 speed** and **+2 special attack**",
    },
    {
        id: v4(),
        name: "Resurrection",
        badForAI: true,
        icon: <GiBlackHandShield />,
        functionToken: resurrection,
        desc: "A copy of the Pokemon that first appeared in the ***grave*** in this fight will appear in your field with **13hp**",
    },
    {
        id: v4(),
        idAward: "FR22twoMagiCarp",
        name: "Fishing Rod",
        icon: <GiCirclingFish />,
        functionToken: fishingRod,
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
        name: "Punch Machamp",
        badForAI: true,
        icon: <GiPunchBlast />,

        functionToken: punchMachamp,
        desc: `Deal **30** points damage of strongest enemy and **block** him. 
     **What a blow!**`,
    },
    {
        id: v4(),
        badForAI: true,
        name: "Shield Stone",
        icon: <GiShieldcomb />,
        functionToken: shieldStone,
        desc: "Give your stronger pokemon **+10 hp** and **+1 defense**",
    },
    {
        id: v4(),
        idAward: "robsadw",
        name: "Robber",
        icon: <GiRobber />,
        functionToken: robber,
        desc: "Deal 3 damage random enemy and destroy his random token. If enemy don't have any tokens deal 13 damage",
    },
].map((token) => ({ ...token, id: v4() }));

export function findTokenByName(name: string) {
    const findToken = allTokens.find((el) => el.name === name) || allTokens[0];
    return { ...findToken, id: v4() };
}
