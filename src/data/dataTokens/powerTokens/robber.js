import clone from "lodash.clone";

let VALUE_DAMAGE = 3;
const MORE_DAMAGE = 13;

export default function robber(state, AI) {
    const newState = clone(state);

    let thisToken = !AI ? newState.enemyTokens : newState.myTokens;
    let thisTeam = !AI ? newState.enemyTeam : newState.myTeam;

    const randomThisTeam = Math.round(Math.random() * [thisTeam.length - 1]);
    VALUE_DAMAGE = thisToken.length === 0 ? MORE_DAMAGE : VALUE_DAMAGE;
    const newStateTeam = {
        [!AI ? "enemyTeam" : "myTeam"]: thisTeam.map((el, i) =>
            i === randomThisTeam
                ? {
                      ...el,
                      hp: el.hp - VALUE_DAMAGE,
                  }
                : el
        ),
    };

    const randomThisToken = Math.round(Math.random() * [thisToken.length - 1]);
    const cloneTokens = clone(thisToken);
    cloneTokens.splice(randomThisToken, 1);
    const newStateToken = {
        [!AI ? "enemyTokens" : "myTokens"]: cloneTokens,
    };
    return { ...state, ...newStateTeam, ...newStateToken };
}
