import clone from "lodash.clone";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const VALUE_DEFENSE = 3;
const VALUE_REVENGE = 3;

export default function highGrass(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState = clone(state);
    let thisTeam;
    thisTeam = AI ? newState.enemyTeam : newState.myTeam;
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
