import clone from "lodash.clone";

export function addNewTokenFn(state, token) {
    const newStateAllTokens = clone(state.tokens);
    newStateAllTokens.push(token);

    return { ...state, tokens: newStateAllTokens };
}
