import clone from "lodash.clone";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const VALUE_DEFENSE = 3;
const VALUE_REVENGE = 3;

export default function highGrass(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);

    const thisTeam = AI ? newState.enemyTeam : newState.myTeam;
    const newStateTeam = {
        [AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el) =>
            el.type === "Grass"
                ? {
                      ...el,
                      type: "Blocked",
                      defense: el.defense + VALUE_DEFENSE,
                      revenge: el.revenge + VALUE_REVENGE,
                  }
                : el
        ),
    };

    return { ...state, ...newStateTeam };
}
