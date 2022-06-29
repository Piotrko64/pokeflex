import { v4 } from "uuid";
import { allTokens, findTokenByName } from "../../dataTokens/allTokens";

const Gyarados = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    name: "Gyarados",
    type: "Water",
    hp: 62,
    attack: 8,
    specialAttack: 12,
    speed: 16,
    defense: 1,
    revenge: 4,
};

const Greninja = {
    id: v4(),
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    name: "Greninja",
    type: "Water",
    hp: 34,
    attack: 5,
    specialAttack: 12,
    speed: 20,
    defense: 0,
    revenge: 3,
};

export const level1 = {
    id: "level1normal",
    name: "level 1",
    color: "linear-gradient(180deg, rgba(33,36,254,1) 0%, rgba(47,0,195,1) 89%)",
    enemyTeam: [Gyarados, Greninja],
    enemyTokens: [findTokenByName("Fishing Rod"), findTokenByName("Fountain")],
    award: {
        tokens: findTokenByName("Fishing Rod"),
    },
};
