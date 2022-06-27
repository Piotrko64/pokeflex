import clone from "lodash.clone";
import Hit from "../../../Audio/actions/Hit.wav";
import pick from "../../../Audio/actions/PickingCart.wav";
import block from "../../../Audio/actions/blockAction.wav";

import { findTokenByName } from "../../../data/dataTokens/allTokens";

import { audioPlay } from "../../../functions/audioPlay";

let whoAttack = "";
let whoAttackID = "";
export function chooseAndFight(state, payload, tF, tE, computer) {
    const teamFriends = clone(tF).filter((e) => e.hp >= 1);
    const teamEnemy = clone(tE).filter((e) => e.hp >= 1);

    const tokens = clone(computer ? state.enemyTokens : state.myTokens);

    let Me;
    let Enemy;
    let MeIndex;
    let Choosing = false;
    let EnemyIndex;
    let stateAfterFightEnemy = clone(teamEnemy);
    let stateAfterFightFriends = clone(teamFriends);
    let stateAfterFightTokens = clone(tokens);

    teamFriends.forEach((e) => {
        if (e.id === payload) {
            whoAttack = e.name;
            whoAttackID = e.id;
            Choosing = true;
        }
    });

    if (Choosing) {
        if (!computer) {
            audioPlay(pick);
        }

        return { ...state, whoAttack, whoAttackID };
    }

    if (!state.whoAttackID) {
        audioPlay(block);
        return { ...state };
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
                Enemy = teamEnemy[0];
                EnemyIndex = 0;
            }
            if (Me.hp > Me.speed) {
                Enemy.hp = Math.max(0, Enemy.hp - Me.attack);
            } else {
                Enemy.hp = Math.max(0, Enemy.hp - Me.specialAttack);
            }

            // TYPE
            if (Enemy.defense === 0) {
                switch (Me.type) {
                    case "Electro":
                        Me.revenge++;
                        break;
                    case "Turbo Electro":
                        Enemy.speed = Math.max(0, Enemy.speed - Me.revenge);
                        Me.revenge++;
                        break;
                    case "Fire":
                        Me.type = "Turbo Fire";
                        break;
                    case "Turbo Fire":
                        Enemy.hp = Math.max(0, Enemy.hp - 3);
                        Me.type = "Fire";
                        break;
                    case "Water":
                        stateAfterFightFriends = [...stateAfterFightFriends].map((el) => ({
                            ...el,
                            hp: el.hp + 1,
                        }));

                        break;

                    case "Grass":
                        Me.hp += Enemy.revenge;

                        break;
                    case "Normal":
                        Me.speed = Math.max(0, Me.speed + 4);
                        Enemy.speed = Math.max(0, Enemy.speed - 4);

                        break;
                    case "Psychic":
                        Enemy.type = "Blocked";
                        break;
                    case "Rock":
                        if (tokens.length <= 2) {
                            stateAfterFightTokens = [...tokens, findTokenByName("Shield Stone")];
                        }
                        break;
                    case "Ice":
                        if (!tokens.find((el) => el.name === "Blizzard")) {
                            stateAfterFightTokens = [...tokens, findTokenByName("Blizzard")];
                        }
                        break;
                    case "Blocked":
                        break;
                    default:
                        return;
                }
            }
            audioPlay(Hit);
            Enemy.defense = Math.max(0, Enemy.defense - 1);
            Me.hp -= Enemy.revenge;

            stateAfterFightFriends[MeIndex] = Me;

            stateAfterFightEnemy[EnemyIndex] = Enemy;
        }
    });

    return {
        ...state,
        enemyTeam: computer ? stateAfterFightFriends : stateAfterFightEnemy,
        myTeam: computer ? stateAfterFightEnemy : stateAfterFightFriends,
        enemyTokens: computer ? stateAfterFightTokens : state.enemyTokens,
        myTokens: computer ? state.myTokens : stateAfterFightTokens,
        whoAttack: "",
        whoAttackID,
        whoIsAttack: "",
        whoIsAttackID: "",
        yourTurn: !state.yourTurn,
    };
}
