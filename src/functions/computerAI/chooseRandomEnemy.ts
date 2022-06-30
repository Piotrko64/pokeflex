import { ArrayPokemonInterface } from "../../types/pokemonTokenData/PokemonInterface";
import clone from "lodash.clone";

export function chooseRandomEnemy(everyFriend: ArrayPokemonInterface, everyEnemy: ArrayPokemonInterface) {
    const filterFriend = clone(everyFriend).filter((el) => el.hp > 0);

    const filterEnemy = clone(everyEnemy).filter((el) => el.hp > 0);

    const randomNumberFriend = Math.round(Math.random() * (filterFriend.length - 1));

    const randomNumberEnemy = Math.round(Math.random() * (filterEnemy.length - 1));

    return [filterFriend[randomNumberFriend].id!, filterEnemy[randomNumberEnemy].id!];
}
