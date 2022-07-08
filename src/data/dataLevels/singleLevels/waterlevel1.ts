import { v4 } from "uuid";
import { LevelInterface } from "../../../@types/levels/LevelInterface";
import { findTokenByName } from "../../dataTokens/allTokens";
import { findPokemonByName } from "../../examplePokemons";

const fourNewMagicarps = Array.from({ length: 5 }, (_carp, index) => ({
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    name: "Magikarp",
    type: "Water",
    hp: 13 + index * 2,
    attack: 3,
    specialAttack: 6,
    speed: 1 + index,
    defense: index,
    revenge: index,
}));

export const waterlevel1: LevelInterface = {
    id: "waterlevel15HARD",
    name: "water level 1",
    color: `#3b66b1`,
    enemyTeam: [findPokemonByName("Wobbuffet"), ...fourNewMagicarps],
    enemyTokens: [findTokenByName("Slow"), findTokenByName("Ready")],
    award: {
        tokens: findTokenByName("Slow"),
    },
};
