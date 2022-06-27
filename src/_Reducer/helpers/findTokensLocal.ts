import { arrayTokenInterface } from "./../../types/pokemonTokenData/tokenInterface";
import { allTokens } from "../../data/dataTokens/allTokens";
import { startTokens } from "../../data/startItems";

export function findTokensLocal() {
    const idTokens: Array<{ name: string }> = JSON.parse(localStorage.getItem("tokens")!)?.map(
        (e: { name: string }) => e.name
    );
    let arrayTokens: arrayTokenInterface = [];

    idTokens?.forEach((el: any) => {
        arrayTokens.push(allTokens.find((t) => t.name === el)!);
    });
    if (!arrayTokens.length) {
        return [...startTokens.slice(0, 3)];
    }

    return arrayTokens;
}
