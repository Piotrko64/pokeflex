const VALUE_DEFENSE = 3;
const VALUE_REVENGE = 3;

export default function highGrass(state, AI) {
    const newState = JSON.parse(JSON.stringify(state));
    let thisTeam;
    thisTeam = AI ? newState.enemyTeam : newState.myTeam;
    const newStateTeam = {
        [AI ? "enemyTeam" : "myTeam"]: thisTeam.map(
            (el) =>
                el.type === "Grass" && {
                    ...el,
                    type: "Blocked",
                    defense: el.defense + VALUE_DEFENSE,
                    revenge: el.revenge + VALUE_REVENGE,
                }
        ),
    };
    console.log({ ...state, newStateTeam });
    return { ...state, ...newStateTeam };
}
