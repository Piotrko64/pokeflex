import { PokemonInterface } from "../../../types/pokemonTokenData/PokemonInterface";
import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";
const Raichu = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    name: "Raichu",
    type: "Turbo Electro",
    hp: 42,
    attack: 7,
    specialAttack: 9,
    speed: 30,
    defense: 1,
    revenge: 3,
};

const Pichu = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",

    name: "Pichu",
    type: "Electro",
    hp: 26,
    attack: 7,
    specialAttack: 8,
    speed: 10,
    defense: 2,
    revenge: 4,
};
const Pachirisu = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png",

    name: "Pachirisu",
    type: "Electro",
    hp: 38,
    attack: 5,
    specialAttack: 7,
    speed: 28,
    defense: 4,
    revenge: 1,
};
export const electrolevel3 = {
    id: "electrolevel3normal",
    name: "electro level 3",
    color: `background: rgb(207,142,39);
background: radial-gradient(circle, rgba(207,142,39,1) 0%, rgba(150,118,75,1) 46%, rgba(251,201,131,1) 100%);`,
    enemyTeam: [Raichu, Pichu, Pachirisu],
    enemyTokens: [
        findTokenByName("Electro Action"),
        findTokenByName("Charging"),
        findTokenByName("Electro Action"),
        findTokenByName("Charging"),
    ],
    award: {
        pokemons: findPokemonByName("Pachirisu") as PokemonInterface,
    },
};
