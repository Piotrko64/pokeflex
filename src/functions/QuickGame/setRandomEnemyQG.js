import { v4 } from "uuid";
import { allTokens } from "../../data/dataTokens/allTokens";
import { examplePokemons } from "../../data/examplePokemons";

export default function setRandomEnemyQG() {
    const randomAmount = Math.round(Math.random() * 1) + 2;
    const randomPoke = () => examplePokemons[Math.round(Math.random() * (examplePokemons.length - 1))];
    const randomToken = () => allTokens[Math.round(Math.random() * (allTokens.length - 1))];
    const arrEnemy = [];
    const arrEnemyTokens = [];

    for (let i = 1; i <= randomAmount; i++) {
        arrEnemy.push({ ...randomPoke(), id: v4() });
    }
    for (let i = 1; i <= 3; i++) {
        arrEnemyTokens.push({ ...randomToken(), id: v4() });
    }
    return [arrEnemy, arrEnemyTokens];
}
