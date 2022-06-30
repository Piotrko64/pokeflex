import { OneTokenInterface } from "../../../types/pokemonTokenData/TokenInterface";
import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";

const Pikachu = {
    id: v4(),
    idAward: "Pika34535345",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name: "Pikachu",
    type: "Electro",
    hp: 28,
    attack: 4,
    specialAttack: 8,
    speed: 22,
    defense: 1,
    revenge: 4,
};
const Raichu = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    name: "Raichu",
    type: "Turbo Electro",
    hp: 42,
    attack: 7,
    specialAttack: 9,
    speed: 12,
    defense: 0,
    revenge: 2,
};

const Pichu = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    idAward: "pichufd45isu",
    name: "Pichu",
    type: "Electro",
    hp: 12,
    attack: 7,
    specialAttack: 8,
    speed: 10,
    defense: 2,
    revenge: 5,
};
const Pichu2 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    idAward: "pichufd45isu",
    name: "Pichu",
    type: "Electro",
    hp: 12,
    attack: 7,
    specialAttack: 8,
    speed: 10,
    defense: 2,
    revenge: 5,
};
export const electrolevel2 = {
    id: "electrolevel2normal",
    name: "electro level 2",
    color: `background: rgb(207,142,39);
background: radial-gradient(circle, rgba(207,142,39,1) 0%, rgba(150,118,75,1) 46%, rgba(251,201,131,1) 100%);`,
    enemyTeam: [Pichu2, Pikachu, Raichu, Pichu],
    enemyTokens: [findTokenByName("Electro Action"), findTokenByName("Slow"), findTokenByName("Charging")],
    award: {
        tokens: findTokenByName("Charging") as OneTokenInterface,
    },
};
