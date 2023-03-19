import { OneTokenInterface } from "../../../@types/pokemonTokenData/TokenInterface";
import { YourItemsInterface } from "../../../@types/_Reducer/YourItems";
import clone from "lodash.clone";
export function addToTeamTokenFn(state: YourItemsInterface, token: OneTokenInterface) {
    const newStateTokenFight = clone(state.tokensFight);
    if (newStateTokenFight.find((el) => el.name === token.name)) {
        return state;
    }
    if (newStateTokenFight.length === 3) {
        newStateTokenFight[2] = token;
    } else {
        newStateTokenFight.push(token);
    }

    return { ...state, tokensFight: newStateTokenFight };
}
