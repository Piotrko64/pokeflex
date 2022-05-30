import clone from "lodash.clone";
import Hit from "../../Audio/Hit.wav";
import pick from "../../Audio/PickingCart.wav";
const pickPlay = new Audio(pick);
let whoAttack = "";
let whoAttackID = "";
export default function chooseAndFight(state, payload, tF, tE, computer) {
    // clone teamFriends and teamEnemy
    const teamFriends = clone(tF);
    const teamEnemy = clone(tE);

    let Me;
    let Enemy;
    let MeIndex;
    let Choosing = false;
    let EnemyIndex;
    let stateAfterFightEnemy = clone(teamEnemy);
    let stateAfterFightFriends = clone(teamFriends);

    teamFriends.forEach((e) => {
        if (e.id === payload) {
            whoAttack = e.name;
            whoAttackID = e.id;
            Choosing = true;
        }
    });
    console.log(whoAttack, whoAttackID);
    if (Choosing) {
        if (!computer) {
            pickPlay.play();
        }

        return { ...state, whoAttack, whoAttackID };
    }
    teamEnemy.forEach((e, i) => {
        if (e.id === payload) {
            Enemy = { ...e };

            EnemyIndex = i;
            teamFriends.forEach((f, fi) => {
                if (f.id === state.whoAttackID) {
                    Me = { ...f };
                    MeIndex = fi;
                }
            });

            if (!Me) {
                Me = teamFriends[0];
                MeIndex = 0;
            }
            if (!Enemy) {
                Me = teamEnemy[0];
                MeIndex = 0;
            }
            if (Me.hp >= Me.speed) {
                Enemy.hp = Math.max(0, Enemy.hp - Me.attack) || 0;
            } else {
                Enemy.hp = Math.max(0, Enemy.hp - Me.specialAttack) || 0;
            }
            console.log(whoAttack, whoAttackID);
            // TYPE
            if (Me.type === "Turbo Fire") {
                Enemy.hp = Math.max(0, Enemy.hp - 3) || 0;
                Me.type = "Fire";
            } else if (Enemy.defense === 0) {
                switch (Me.type) {
                    case "Electro":
                        Me.revenge++;
                        break;
                    case "Fire":
                        Me.type = "Turbo Fire";
                        break;

                    case "Water":
                        // IT WORKS
                        stateAfterFightFriends = [...stateAfterFightFriends].map((e) => ({
                            ...e,
                            hp: e.hp + 1,
                        }));

                        break;

                    case "Grass":
                        Me.hp += Enemy.revenge;

                        break;
                    case "Normal":
                        Enemy.type = "Blocked";
                        break;
                    case "Psychic":
                        Me.type = Enemy.type;
                        Me.hp += 5;
                        break;
                    case "Blocked":
                        break;
                    default:
                        return;
                }
            }
            const audio = new Audio(Hit);
            audio.play();
            Enemy.defense = Math.max(0, Enemy.defense - 1);
            Me.hp -= Enemy.revenge;

            stateAfterFightFriends[MeIndex] = Me;

            stateAfterFightEnemy[EnemyIndex] = Enemy;
        }
    });
    console.log(whoAttack, whoAttackID, Enemy);
    return {
        ...state,
        enemyTeam: computer ? stateAfterFightFriends : stateAfterFightEnemy,
        myTeam: computer ? stateAfterFightEnemy : stateAfterFightFriends,
        whoAttack: "",
        whoAttackID,
        whoIsAttack: "",
        whoIsAttackID: "",
        yourTurn: computer ? true : false,
    };
}
