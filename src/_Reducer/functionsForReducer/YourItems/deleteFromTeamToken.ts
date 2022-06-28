import { yourItemsInterface } from "./../../../types/_Reducer/yourItems";
import clone from "lodash.clone";
export function deleteFromTeamTokenFn(state: yourItemsInterface, name: string) {
    let newStateTokenFight = clone(state.tokensFight);

    newStateTokenFight = newStateTokenFight.filter((el) => el.name !== name);

    return { ...state, tokensFight: newStateTokenFight };
}
