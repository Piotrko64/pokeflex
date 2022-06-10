import clone from "lodash.clone";

export function chooseRandomEnemy(everyFriend, everyEnemy) {
    if (!everyEnemy.length || !everyFriend.length) {
        return;
    }
    const filterFriend = clone(everyFriend).filter((el) => el.hp > 0);

    const filterEnemy = clone(everyEnemy).filter((el) => el.hp > 0);

    const randomNumberFriend = Math.round(Math.random() * (filterFriend.length - 1));

    const randomNumberEnemy = Math.round(Math.random() * (filterEnemy.length - 1));
    console.log([filterFriend[randomNumberFriend]?.id, filterEnemy[randomNumberEnemy]?.id]);
    return [filterFriend[randomNumberFriend]?.id, filterEnemy[randomNumberEnemy]?.id];
}
