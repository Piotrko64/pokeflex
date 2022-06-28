import { GiPunchBlast } from "react-icons/gi";
import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";
import punchMachamp from "../../dataTokens/powerTokens/punchMachamp";
import { findPokemonByName } from "../../examplePokemons";
import Tribe from "../../../Audio/mainSoundtracks/Tribe.mp3";
import { pokemonInterface } from "../../../types/pokemonTokenData/pokemonInterface";
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
    hp: 48,
    attack: 10,
    specialAttack: 12,
    speed: 26,
    defense: 2,
    revenge: 2,
};
const Geodude = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    type: "Rock",
    hp: 19,
    attack: 5,
    specialAttack: 6,
    speed: 12,
    defense: 0,
    revenge: 2,
};
const Geodude2 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    type: "Rock",
    hp: 21,
    attack: 5,
    specialAttack: 6,
    speed: 19,
    defense: 0,
    revenge: 2,
};
const Geodude3 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    type: "Rock",
    hp: 17,
    attack: 4,
    specialAttack: 5,
    speed: 10,
    defense: 2,
    revenge: 0,
};
export const rocklevel3 = {
    id: "rocklevel3normal",
    name: "rock level 3",
    color: `background: rgb(74,74,74);
background: linear-gradient(90deg, rgba(74,74,74,1) 23%, rgba(150,150,150,1) 64%, rgba(44,46,39,1) 100%);`,
    enemyTeam: [Geodude3, Machamp, Geodude, Geodude2],
    enemyTokens: [findTokenByName("Sacrifice"), punchMachampToken],
    award: {
        pokemons: findPokemonByName("Machamp") as pokemonInterface,
    },
    music: Tribe,
};
