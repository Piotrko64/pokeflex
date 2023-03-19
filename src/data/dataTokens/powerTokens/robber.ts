import { StateFightInterface } from "../../../@types/_Reducer/StateFight";
import clone from "lodash.clone";

let VALUE_DAMAGE = 3;
const MORE_DAMAGE = 13;

export default function robber(state: StateFightInterface, AI: boolean): StateFightInterface {
    const newState = clone(state);

    const thisToken = AI ? newState.myTokens : newState.enemyTokens;
    const thisTeam = AI ? newState.myTeam : newState.enemyTeam;

    const randomThisTeam = Math.round(Math.random() * (thisTeam.length - 1));
    VALUE_DAMAGE = thisToken.length === 0 ? MORE_DAMAGE : VALUE_DAMAGE;
    const newStateTeam = {
        [AI ? "myTeam" : "enemyTeam"]: thisTeam.map((el, i) =>
            i === randomThisTeam
                ? {
                      ...el,
                      hp: el.hp - VALUE_DAMAGE,
                  }
                : el
        ),
    };

    const randomThisToken = Math.round(Math.random() * (thisToken.length - 1));
    const cloneTokens = clone(thisToken);
    cloneTokens.splice(randomThisToken, 1);
    const newStateToken = {
        [AI ? "myTokens" : "enemyTokens"]: cloneTokens,
    };
    return { ...state, ...newStateTeam, ...newStateToken };
}
