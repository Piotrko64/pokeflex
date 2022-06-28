import { oneTokenInterface } from "./../../../types/pokemonTokenData/tokenInterface";
import { yourItemsInterface } from "./../../../types/_Reducer/yourItems";
import clone from "lodash.clone";
export function addToTeamTokenFn(state: yourItemsInterface, token: oneTokenInterface) {
    let newStateTokenFight = clone(state.tokensFight);
    if (newStateTokenFight.find((el) => el.name === token.name)) {
        return state;
    }
    if (newStateTokenFight.length === 3) {
        newStateTokenFight[2] = token;
    } else {
        newStateTokenFight.push(token);
    }
    console.log({ ...state, tokensFight: newStateTokenFight });
    return { ...state, tokensFight: newStateTokenFight };
}
