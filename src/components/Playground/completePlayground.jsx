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
import { stateFightInterface } from "../../types/_Reducer/stateFight";

const WholeField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    margin: auto;
    flex-direction: column-reverse;
    min-height: 100vh;
`;

function CompletePlayground({ music = quickGameSoundtrack }) {
    const { win, yourTurn, friendsTeam, friendsTokens, enemyTeam, enemyTokens } = useSelectorStateFight();

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
        () => <GroundForCards pokemons={friendsTeam} tokens={friendsTokens} />,
        [friendsTeam, friendsTokens]
    );
    const GroundForEnemy = useMemo(
        () => <GroundForCards pokemons={enemyTeam} tokens={enemyTokens} AI={true} />,
        [enemyTeam, enemyTokens]
    );

    return (
        <>
            <WholeField>
                {GroundForFriends}
                {YourTurnMemo}
                {GroundForEnemy}
            </WholeField>
            {win && <WinLose value={win} />}
        </>
    );
}

export default CompletePlayground;
