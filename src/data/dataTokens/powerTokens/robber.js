import clone from "lodash.clone";

const VALUE_DAMAGE = 3;

export default function robber(state, AI) {
    const newState = clone(state);
    let thisTeam = !AI ? newState.enemyTeam : newState.myTeam;
    const randomThisTeam = Math.round(Math.random() * [thisTeam.length - 1]);
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

    let thisToken = !AI ? newState.enemyTokens : newState.myTokens;
    const randomThisToken = Math.round(Math.random() * [thisToken.length - 1]);
    const cloneTokens = clone(thisToken);
    cloneTokens.splice(randomThisToken, 1);
    const newStateToken = {
        [!AI ? "enemyTokens" : "myTokens"]: cloneTokens,
    };
    console.log(clone(thisToken).splice(randomThisToken, 1), randomThisToken);
    return { ...state, ...newStateTeam, ...newStateToken };
}
