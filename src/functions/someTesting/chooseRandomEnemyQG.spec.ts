import { it, expect } from "vitest";
import { chooseRandomEnemy } from "../computerAI/chooseRandomEnemy";
import { fakeEnemyArrayPokemons, fakeFriendArrayPokemons } from "./dataForTesting/dataChooseRandomEnemyQG";

it("should return array with id: 'firstID' and 'secondID' ", () => {
    const result = chooseRandomEnemy(fakeFriendArrayPokemons, fakeEnemyArrayPokemons);
    const whatExpect = ["firstID", "secondID"];
    expect(result).toEqual(whatExpect);
});
