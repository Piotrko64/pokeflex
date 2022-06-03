import styled from "styled-components";

import quickGameSoundtrack from "../../Audio/mainSoundtracks/Chill.mp3";

import { useSelector, useDispatch } from "react-redux";

import { animation, computerMove, noWhoAttack, setWhoWin, tokenPowerAi } from "../../_Actions/mainAction";

import WinSound from "../../Audio/winLose/Win.wav";
import LoseSound from "../../Audio/winLose/Lose.wav";
import RemisSound from "../../Audio/winLose/Scream.wav";

import GroundForCards from "./groundFriends";
import YourTurn from "./YourTurn";
import { useEffect } from "react";
import { chooseRandomEnemy } from "../../functions/computerAI/chooseRandomEnemy";
import WinLose from "./WinLoseComponents/WinLose";
import useSountrack from "../../hooks/useSoundtrack";
import useBeginFight from "../../hooks/fightHooks/useBeginFight";
import audioPlay from "../../_Reducer/helpers/audioPlay";

const WholeField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    margin: auto;
    flex-direction: column-reverse;
    min-height: 100vh;
`;

function CompletePlayground({ music }) {
    const dispatch = useDispatch();

    const All = useSelector((state) => state.FriendsTeam);

    const Win = useSelector((state) => state.FriendsTeam.whoWin);

    const yourTurn = useSelector((state) => state.FriendsTeam.yourTurn);

    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const FriendsTokens = useSelector((state) => state.FriendsTeam.myTokens);

    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);
    const EnemyTokens = useSelector((state) => state.FriendsTeam.enemyTokens);

    const allCoordinates = useSelector((state) => state.FriendsTeam.allCoordinates);

    const volume = useSelector((state) => state.SettingsReducer.Volume);

    const setMusic = useSountrack(music || quickGameSoundtrack, volume);
    useEffect(() => {
        setMusic(music);
    }, [music]);
    useBeginFight();

    function handleComputerChoose(x) {
        dispatch(computerMove(x));
        dispatch(animation([]));
    }
    function findRandom() {
        const randomEnemy = chooseRandomEnemy(FriendsTeam, EnemyTeam)[0];
        if (allCoordinates.find((e) => e.id === randomEnemy)) {
            dispatch(animation(allCoordinates.find((e) => e.id === randomEnemy).coordinate));
            dispatch(computerMove(randomEnemy));
        } else {
            findRandom();
        }
    }
    function handleMoveComputer(x) {
        handleComputerChoose(x);
        setTimeout(() => {
            findRandom();

            setTimeout(() => dispatch(noWhoAttack()), 200);
        }, 500);
    }
    useEffect(() => {
        if (Win) {
            return;
        }
        if (FriendsTeam.length === 0 && EnemyTeam.length === 0) {
            audioPlay(RemisSound);
            dispatch(setWhoWin("remis"));
        } else if (FriendsTeam.length === 0) {
            audioPlay(LoseSound);
            dispatch(setWhoWin("lose"));
        } else if (EnemyTeam.length === 0) {
            audioPlay(WinSound);
            dispatch(setWhoWin("win"));
        }
        return () => {
            setWhoWin("");
        };
    }, [FriendsTeam.length, EnemyTeam.length]);
    useEffect(() => {
        if (!yourTurn) {
            setTimeout(() => {
                if (!EnemyTeam.filter((e) => e.hp > 1).length) {
                    return;
                }
                if (EnemyTokens.length > 0 && Math.round(Math.random() * 5) + 1 > 3) {
                    const randomNumberTokens = Math.round(Math.random() * (EnemyTokens.length - 1));
                    const randomToken = EnemyTokens[randomNumberTokens];

                    dispatch(tokenPowerAi(randomToken.functionToken(All, true), randomToken.id));
                } else if (chooseRandomEnemy(FriendsTeam, EnemyTeam)[1]) {
                    setTimeout(() => handleMoveComputer(chooseRandomEnemy(FriendsTeam, EnemyTeam)[1]), 400);
                } else {
                    handleMoveComputer(FriendsTeam[0].id, EnemyTeam[0].id);
                }
            }, 1000);
        }
    }, [yourTurn]);

    return (
        <>
            <WholeField>
                <GroundForCards pokemons={FriendsTeam} tokens={FriendsTokens} />
                <YourTurn turn={yourTurn} />
                <GroundForCards pokemons={EnemyTeam} tokens={EnemyTokens} AI={true} />
            </WholeField>
            {Win && <WinLose value={Win} />}
        </>
    );
}

export default CompletePlayground;
