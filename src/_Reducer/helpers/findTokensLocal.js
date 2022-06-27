import { allTokens } from "../../data/dataTokens/allTokens";
import { startTokens } from "../../data/startItems";

export function findTokensLocal() {
    const idTokens = JSON.parse(localStorage.getItem("tokens"))?.map((e) => e.name);
    console.log(idTokens);
    let arrayTokens = [];

    idTokens?.forEach((el) => {
        arrayTokens.push(allTokens.find((t) => t.name === el));
    });
    if (!arrayTokens.length) {
        console.log(...startTokens.slice(0, 2));
        return [...startTokens.slice(0, 2)];
    }
    console.log(arrayTokens);
    return arrayTokens;
}
