import clone from "lodash.clone";
import { YourItemsInterface } from "../../../types/_Reducer/YourItems";

export function deleteFromTeamFn(state: YourItemsInterface, name: string) {
    let newStateTeamFight = clone(state.teamFight);
    newStateTeamFight = newStateTeamFight.filter((el) => el.name !== name);

    return { ...state, teamFight: newStateTeamFight };
}
