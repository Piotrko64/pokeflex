import { v4 } from "uuid";
import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

const swinub1 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    name: "Swinub",
    type: "Ice",
    hp: 19,
    attack: 6,
    specialAttack: 8,
    speed: 18,
    defense: 3,
    revenge: 3,
};
const swinub2 = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    name: "Swinub",
    type: "Ice",
    hp: 19,
    attack: 6,
    specialAttack: 8,
    speed: 18,
    defense: 3,
    revenge: 3,
};
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

export const icelevel1 = {
    id: "icelevel1normal",
    name: "ice level 1",
    color: `background: rgb(2,67,113);
background: linear-gradient(150deg, rgba(2,67,113,1) 14%, rgba(142,151,186,1) 66%, rgba(0,170,255,1) 78%);`,
    enemyTeam: [swinub1, Glaceon, swinub2],
    enemyTokens: [findTokenByName("Fountain"), findTokenByName("Fishing Road")],
    award: {
        pokemons: findPokemonByName("Swinub"),
    },
};
