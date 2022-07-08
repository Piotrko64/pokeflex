import { ArrayTokenInterface } from "../@types/pokemonTokenData/TokenInterface";
import { ArrayPokemonInterface } from "../@types/pokemonTokenData/PokemonInterface";
import { v4 } from "uuid";
import { GiWaterFountain, GiBlackHandShield } from "react-icons/gi";

import fountain from "./dataTokens/powerTokens/fountain";
import resurrection from "./dataTokens/powerTokens/resurrection";

export const startPokemons: ArrayPokemonInterface = [
    {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        name: "Squirtle",
        type: "Water",
        hp: 42,
        attack: 6,
        specialAttack: 7,
        speed: 12,
        defense: 4,
        revenge: 0,
    },
    {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        name: "Charmander",
        type: "Fire",
        hp: 39,
        attack: 5,
        specialAttack: 7,
        speed: 18,
        defense: 3,
        revenge: 0,
    },
    {
        idAward: "Superspearowforme",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
        name: "Spearow",
        type: "Flying",
        hp: 22,
        attack: 7,
        specialAttack: 10,
        speed: 20,
        defense: 1,
        revenge: 6,
    },
    {
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        name: "Bulbasaur",
        type: "Grass",
        hp: 37,
        attack: 6,
        specialAttack: 7,
        speed: 16,
        defense: 3,
        revenge: 2,
    },
].map((el) => ({ ...el, id: v4() }));

export const startTokens: ArrayTokenInterface = [
    {
        name: "Fountain",
        icon: <GiWaterFountain />,
        functionToken: fountain,
        desc: "Give your strongest pokemon **+16** hp and change its type to **Water**",
    },
    {
        name: "Resurrection",
        icon: <GiBlackHandShield />,
        functionToken: resurrection,
        desc: "A copy of the Pokemon that first appeared in the ***grave*** in this fight will appear in your field with **13hp**",
    },
].map((el) => ({ ...el, id: v4() }));
