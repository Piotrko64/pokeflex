import { oneTokenInterface } from "./../../../types/pokemonTokenData/tokenInterface";
import { yourItemsInterface } from "./../../../types/_Reducer/yourItems";
import clone from "lodash.clone";

export function addNewTokenFn(state: yourItemsInterface, token: oneTokenInterface) {
    const newStateAllTokens = clone(state.tokens);
    newStateAllTokens.push(token);

    return { ...state, tokens: newStateAllTokens };
}
