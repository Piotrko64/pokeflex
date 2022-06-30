import { OneTokenInterface } from "../../../types/pokemonTokenData/TokenInterface";
import { YourItemsInterface } from "../../../types/_Reducer/YourItems";
import clone from "lodash.clone";

export function addNewTokenFn(state: YourItemsInterface, token: OneTokenInterface) {
    const newStateAllTokens = clone(state.tokens);
    newStateAllTokens.push(token);

    return { ...state, tokens: newStateAllTokens };
}
