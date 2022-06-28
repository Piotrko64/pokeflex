import clone from "lodash.clone";
import { stateFightInterface } from "../../../types/_Reducer/stateFight";

const VALUE_PUNCH = 30;

export default function punchMachamp(state: stateFightInterface, AI: boolean): stateFightInterface {
    const newState = clone(state);
    let thisTeam;
    thisTeam = !AI ? newState.enemyTeam : newState.myTeam;
    const strongestThisTeamID = [...thisTeam].sort((a, b) => b.hp - a.hp)[0].id;
    const newStateTeam = {
        [!AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el) =>
            el.id === strongestThisTeamID
                ? {
                      ...el,
                      hp: el.hp - VALUE_PUNCH,
                      type: "Blocked",
                  }
                : el
        ),
    };

    return { ...state, ...newStateTeam };
}
