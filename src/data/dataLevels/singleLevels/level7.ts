import { OneTokenInterface } from "../../../types/pokemonTokenData/TokenInterface";
import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";

const Glaceon = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    name: "Glaceon",
    type: "Ice",
    hp: 75,
    attack: 5,
    specialAttack: 9,
    speed: 40,
    defense: 3,
    revenge: 1,
};
const GeoDude = {
    id: v4(),

    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    type: "Rock",
    hp: 40,
    attack: 5,
    specialAttack: 11,
    speed: 19,
    defense: 2,
    revenge: 2,
};
export const level7 = {
    id: "level7normal1",
    name: "level 7",
    color: `background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 3%, rgba(44,73,191,1) 46%, rgba(0,170,255,1) 94%);`,
    enemyTeam: [GeoDude, Glaceon],
    enemyTokens: [
        findTokenByName("Blizzard"),
        findTokenByName("Shield Stone"),
        findTokenByName("Fishing Rod"),
    ],
    award: {
        tokens: findTokenByName("Blizzard") as OneTokenInterface,
    },
};
