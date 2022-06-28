import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";

import punchMachamp from "../../dataTokens/powerTokens/punchMachamp";
import { GiPunchBlast } from "react-icons/gi";
import { oneTokenInterface } from "../../../types/pokemonTokenData/tokenInterface";

const punchMachampToken = {
    id: v4(),
    name: "Punch of Machamp",

    icon: <GiPunchBlast />,

    functionToken: punchMachamp,
    desc: `Deal **30** points damage of strongest enemy and **block** him. 
     **What a blow!**`,
};

const Machamp = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    name: "Machamp",
    type: "Rock",
    hp: 45,
    attack: 7,
    specialAttack: 9,
    speed: 31,
    defense: 2,
    revenge: 2,
};
const Mime = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    name: "Mr mime",
    type: "Psychic",
    hp: 48,
    attack: 6,
    specialAttack: 8,
    speed: 24,
    defense: 1,
    revenge: 5,
};
export const level6 = {
    id: "level6normal1",
    name: "level 6",
    color: `linear-gradient(150deg, rgba(144,144,144,1) 3%, rgba(191,44,179,1) 46%, rgba(63,39,74,1) 94%);`,
    enemyTeam: [Mime, Machamp],
    enemyTokens: [punchMachampToken, findTokenByName("Punch")],
    award: {
        tokens: findTokenByName("Punch") as oneTokenInterface,
    },
};
