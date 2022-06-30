import { YourItemsInterface } from "../../../types/_Reducer/YourItems";
import clone from "lodash.clone";
export function deleteFromTeamTokenFn(state: YourItemsInterface, name: string) {
    let newStateTokenFight = clone(state.tokensFight);

    newStateTokenFight = newStateTokenFight.filter((el) => el.name !== name);

    return { ...state, tokensFight: newStateTokenFight };
}
