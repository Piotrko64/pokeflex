import styled from "styled-components";

import quickGameSoundtrack from "../../Audio/mainSoundtracks/Chill.mp3";

import GroundForCards from "./GroundForCards";
import YourTurn from "./YourTurn";
import { useEffect, useMemo } from "react";

import WinLose from "./WinLoseComponents/WinLose";
import { useSoundtrack } from "../../hooks/useSoundtrack";

import { useBeginFight } from "../../hooks/fightHooks/completePlayground/useBeginFight";
import { useShowWinner } from "../../hooks/fightHooks/completePlayground/useShowWinner";
import { useTurnEnemy } from "../../hooks/fightHooks/completePlayground/useTurnEnemy";
import { useSelectorStateFight } from "../../_Reducer/selectors/useSelectorStateFight";
import UseSelectorSettings from "../../_Reducer/selectors/useSelectorSettings";

const WholeField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    margin: auto;
    flex-direction: column-reverse;
    height: 100vh;
`;

export function CompletePlayground({ music = quickGameSoundtrack }) {
    const { whoWin, yourTurn, myTeam, myTokens, enemyTeam, enemyTokens } = useSelectorStateFight();

    const { volume } = UseSelectorSettings();

    const setMusic = useSoundtrack(music, volume);

    const YourTurnMemo = useMemo(() => <YourTurn turn={yourTurn} />, [yourTurn]);

    useEffect(() => {
        setMusic(music);
    }, [music]);

    useBeginFight();
    useShowWinner();
    useTurnEnemy();

    const GroundForFriends = useMemo(
        () => <GroundForCards pokemons={myTeam} tokens={myTokens} />,
        [myTeam, myTokens]
    );
    const GroundForEnemy = useMemo(
        () => enemyTeam && <GroundForCards pokemons={enemyTeam} tokens={enemyTokens} AI={true} />,
        [enemyTeam, enemyTokens]
    );

    return (
        <>
            <WholeField>
                {GroundForFriends}
                {YourTurnMemo}
                {GroundForEnemy}
            </WholeField>
            {whoWin && <WinLose value={whoWin} />}
        </>
    );
}
