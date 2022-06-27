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
    const amountEnemy = (amount) => arrEnemy.length <= amount;

    for (let i = 1; i <= randomAmount; i++) {
        arrEnemy.push({ ...randomPoke(), id: v4() });
    }

    for (let i = 1; i <= 3; i++) {
        arrEnemyTokens.push({ ...randomToken(), id: v4() });
    }

    arrEnemy = arrEnemy.map(({ ...el }) => {
        const { hp, defense, specialAttack, revenge, speed, attack } = el;
        const twoEnemy = () => {
            if (amountEnemy(2)) {
                return {
                    hp: hp + 20,
                    defense: defense + 2,
                    specialAttack: specialAttack + 6,
                };
            }
        };
        const oneEnemy = () => {
            if (amountEnemy(1)) {
                return {
                    revenge: revenge + 4,
                    speed: speed + 30,
                    attack: attack + 4,
                };
            }
        };

        return {
            ...el,
            ...twoEnemy(),
            ...oneEnemy(),
        };
    });

    return [arrEnemy, arrEnemyTokens];
}
