const VALUE_PUNCH = 13;

export default function punch(state, AI) {
    const newState = JSON.parse(JSON.stringify(state));
    let thisTeam;
    thisTeam = AI ? newState.enemyTeam : newState.myTeam;
    const randomThisTeam = Math.round(Math.random() * [thisTeam.length - 1]);
    const newStateTeam = {
        [AI ? "enemyTeam" : "myTeam"]: thisTeam.map(
            (el, i) =>
                i === randomThisTeam && {
                    ...el,
                    hp: el.hp - VALUE_PUNCH,
                }
        ),
    };

    return { ...state, ...newStateTeam };
}
