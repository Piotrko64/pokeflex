import { OneTokenInterface } from "../../../types/pokemonTokenData/TokenInterface";
import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";

const Onix = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    name: "Onix",
    type: "Rock",
    hp: 59,
    attack: 8,
    specialAttack: 12,
    speed: 25,
    defense: 2,
    revenge: 2,
};
const Geodude = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    type: "Rock",
    hp: 25,
    attack: 5,
    specialAttack: 8,
    speed: 19,
    defense: 0,
    revenge: 2,
};

export const rocklevel1 = {
    id: "rocklevel1normal",
    name: "rock level 1",
    color: `
    background: rgb(135,135,135);
background: linear-gradient(137deg, rgba(135,135,135,1) 0%, rgba(25,30,36,1) 100%);`,
    enemyTeam: [Onix, Geodude],
    enemyTokens: [findTokenByName("Punch"), findTokenByName("Shield Stone")],
    award: {
        tokens: findTokenByName("Sacrifice") as OneTokenInterface,
    },
};
