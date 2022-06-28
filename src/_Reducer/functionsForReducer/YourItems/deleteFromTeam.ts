import { yourItemsInterface } from "./../../../types/_Reducer/yourItems";
import clone from "lodash.clone";
export function deleteFromTeamFn(state: yourItemsInterface, name: string) {
    let newStateTeamFight = clone(state.teamFight);
    newStateTeamFight = newStateTeamFight.filter((el) => el.name !== name);

    return { ...state, teamFight: newStateTeamFight };
}
