import { v4 } from "uuid";
import { PokemonInterface } from "../../../types/pokemonTokenData/PokemonInterface";
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
const swinub2 = {
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
const Glaceon = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    name: "Glaceon",
    type: "Ice",
    hp: 50,
    attack: 5,
    specialAttack: 9,
    speed: 30,
    defense: 3,
    revenge: 1,
};
const Eevee = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    name: "Eevee",
    type: "Normal",
    hp: 66,
    attack: 6,
    specialAttack: 8,
    speed: 24,
    defense: 2,
    revenge: 2,
};
export const level8 = {
    id: "level8normal1",
    name: "level 8",
    color: `background: rgb(113,66,2);
background: linear-gradient(150deg, rgba(113,66,2,1) 14%, rgba(142,181,186,1) 66%, rgba(92,199,156,1) 78%);`,
    enemyTeam: [swinub, Glaceon, Eevee, swinub2],
    enemyTokens: [findTokenByName("Slow"), findTokenByName("Univinted Guest")],
    award: {
        pokemons: findPokemonByName("Eevee") as PokemonInterface,
    },
};
