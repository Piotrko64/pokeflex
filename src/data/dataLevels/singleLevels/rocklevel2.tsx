import { GiPunchBlast } from "react-icons/gi";
import { v4 } from "uuid";
import { LevelInterface } from "../../../@types/levels/LevelInterface";
import { PokemonInterface } from "../../../@types/pokemonTokenData/PokemonInterface";
import { findTokenByName } from "../../dataTokens/allTokens";
import punchMachamp from "../../dataTokens/powerTokens/punchMachamp";
import { findPokemonByName } from "../../examplePokemons";

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
    hp: 62,
    attack: 10,
    specialAttack: 12,
    speed: 31,
    defense: 2,
    revenge: 2,
};

export const rocklevel2: LevelInterface = {
    id: "rocklevel2normal",
    name: "rock level 2",
    color: `background: rgb(47,42,43);
background: radial-gradient(circle, rgba(47,42,43,1) 27%, rgba(86,87,93,1) 96%);`,
    enemyTeam: [Machamp],
    enemyTokens: [findTokenByName("Punch"), punchMachampToken],
    award: {
        pokemons: findPokemonByName("Geodude") as PokemonInterface,
    },
};
