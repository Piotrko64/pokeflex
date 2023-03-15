import clone from "lodash.clone";
import { StateFightInterface } from "../../../@types/_Reducer/StateFight";

const VALUE_PUNCH = 30;

export default function punchMachamp(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);
    const thisTeam = AI ? newState.myTeam : newState.enemyTeam;
    const strongestThisTeamID = [...thisTeam].sort((a, b) => b.hp - a.hp)[0].id;
    const newStateTeam = {
        [AI ? "myTeam" : "enemyTeam"]: thisTeam.map((el) =>
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
