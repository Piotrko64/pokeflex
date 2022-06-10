import { v4 } from "uuid";
import { allTokens } from "../../data/dataTokens/allTokens";
import { examplePokemons } from "../../data/examplePokemons";

export default function setRandomEnemyQG() {
    const randomAmount = Math.round(Math.random() * 2) + 1;
    const filterArr = allTokens.filter((el) => !el.badForAI);
    const randomPoke = () => examplePokemons[Math.round(Math.random() * (examplePokemons.length - 1))];
    const randomToken = () => filterArr[Math.round(Math.random() * (filterArr.length - 1))];

    let arrEnemy = [];
    const arrEnemyTokens = [];

    for (let i = 1; i <= randomAmount; i++) {
        arrEnemy.push({ ...randomPoke(), id: v4() });
    }

    for (let i = 1; i <= 3; i++) {
        arrEnemyTokens.push({ ...randomToken(), id: v4() });
    }

    if (arrEnemy.length <= 2) {
        arrEnemy = arrEnemy.map(({ hp, defense, specialAttack, ...el }) => ({
            ...el,
            hp: hp + 20,
            defense: defense + 2,
            specialAttack: specialAttack + 6,
        }));
    }
    if (arrEnemy.length <= 1) {
        arrEnemy = arrEnemy.map(({ revenge, speed, attack, ...el }) => ({
            ...el,
            revenge: revenge + 4,
            speed: speed + 30,
            attack: attack + 4,
        }));
    }

    return [arrEnemy, arrEnemyTokens];
}
