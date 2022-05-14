const SMALL_ATTACK = 7;
const STRONGER_ATTACK = 14;

export default function electroAction(state) {
    const newState = JSON.parse(JSON.stringify(state));
    const newStateEnemyTeam = [...newState.enemyTeam];
    let thisEnemy;
    let thisAttack;
    if (newState.myTeam.find((el) => el.type === "Electro")) {
        thisEnemy = newStateEnemyTeam.sort((a, b) => {
            return b.hp - a.hp;
        })[0];
        thisAttack = STRONGER_ATTACK;
    } else {
        thisEnemy = newStateEnemyTeam.sort((a, b) => {
            return b.hp - a.hp;
        })[newStateEnemyTeam.length - 1];
        thisAttack = SMALL_ATTACK;
    }

    const powerfulEnemyIndex = newState.enemyTeam.findIndex((el) => el.id === thisEnemy.id);
    let enemyTeam = newState.enemyTeam;
    enemyTeam[powerfulEnemyIndex] = { ...thisEnemy, hp: thisEnemy.hp - thisAttack };

    return { ...state, enemyTeam };
}
