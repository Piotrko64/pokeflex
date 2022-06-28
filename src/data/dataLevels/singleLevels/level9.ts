import { pokemonInterface } from "./../../../types/pokemonTokenData/pokemonInterface";
import { v4 } from "uuid";
import { levelInterface } from "../../../types/levels/levelInterface";
import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

const swinub = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    name: "Swinub",
    type: "Ice",
    hp: 11,
    attack: 4,
    specialAttack: 8,
    speed: 10,
    defense: 0,
    revenge: 3,
};

export const level9: levelInterface = {
    id: "level9HARDD1",
    name: "level 9",
    color: `background: rgb(207,142,39);
background: linear-gradient(137deg, rgba(207,142,39,1) 0%, rgba(65,65,65,1) 46%, rgba(106,106,106,1) 100%);`,
    enemyTeam: [
        swinub,
        findPokemonByName("Pikachu"),

        findPokemonByName("Machamp"),
        findPokemonByName("Pichu"),
    ],
    enemyTokens: [
        findTokenByName("Univinted Guest"),
        findTokenByName("Punch Machamp"),
        findTokenByName("Charging"),
    ],
    award: {
        pokemons: findPokemonByName("Pichu") as pokemonInterface,
    },
};
