export function chooseRandomEnemy(everyFriend, everyEnemy) {
    const randomNumberFriend = Math.round(Math.random() * (everyFriend.length - 1));

    const randomNumberEnemy = Math.round(Math.random() * (everyEnemy.length - 1));

    return [everyFriend[randomNumberFriend].id, everyEnemy[randomNumberEnemy].id];
}
