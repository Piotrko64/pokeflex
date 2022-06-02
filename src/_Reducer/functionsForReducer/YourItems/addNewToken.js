import clone from "lodash.clone";

export function addNewToken(state, token) {
    const newStateAllTokens = clone(state.Tokens);
    newStateAllTokens.push(token);

    return { ...state, Tokens: newStateAllTokens };
}
