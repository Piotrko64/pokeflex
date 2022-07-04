import { OneTokenInterface } from "../../@types/pokemonTokenData/TokenInterface";
import { ArrayTokenInterface } from "../../@types/pokemonTokenData/TokenInterface";
import { allTokens } from "../../data/dataTokens/allTokens";
import { startTokens } from "../../data/startItems";

export function findTokensLocal() {
    const idTokens: Array<string> = JSON.parse(localStorage.getItem("tokens")!)?.map(
        (e: { name: string }) => e.name
    );

    let arrayTokens: ArrayTokenInterface = [];

    idTokens?.forEach((el) => {
        arrayTokens.push(allTokens.find((t: OneTokenInterface) => t.name === el)!);
    });
    if (!arrayTokens.length) {
        return [...startTokens.slice(0, 2)];
    }

    return arrayTokens;
}
