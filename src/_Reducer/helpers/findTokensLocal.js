import { allTokens } from "../../data/dataTokens/allTokens";
import { startTokens } from "../../data/startItems";

export function findTokensLocal() {
    const idTokens = JSON.parse(localStorage.getItem("tokens"))?.map((e) => e.name);
    let arrayTokens = [];

    idTokens?.forEach((el) => {
        arrayTokens.push(allTokens.find((t) => t.name === el));
    });
    if (!arrayTokens.length) {
        return [...startTokens.slice(0, 3)];
    }

    return arrayTokens;
}
