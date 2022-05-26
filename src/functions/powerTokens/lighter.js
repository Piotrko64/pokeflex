import { allTokens } from "../../data/allTokens";
import clone from "lodash.clone";

export default function lighter(state, AI) {
    const conflagration = allTokens.find((el) => el.name === "Conflagration");
    const newState = clone(state);
    let newStateTeam = AI
        ? newState.enemyTeam.map((el) => ({ ...el, type: "Turbo Fire" }))
        : newState.myTeam.map((el) => ({ ...el, type: "Turbo Fire" }));

    let newStateTokens = AI
        ? [...newState.enemyTokens, conflagration]
        : [...newState.myTokens, conflagration];
    console.log(newStateTokens);
    newStateTeam = AI ? { enemyTeam: newStateTeam } : { myTeam: newStateTeam };
    newStateTokens = AI ? { enemyTokens: newStateTokens } : { myTokens: newStateTokens };

    const stateToReturn = { ...state, ...newStateTeam, ...newStateTokens };
    console.log({ ...state, ...newStateTeam, myTokens: newStateTokens });
    return stateToReturn;
}
