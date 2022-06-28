import { useDispatch, useSelector } from "react-redux";
import { audioPlay } from "../../../functions/audioPlay";

import WinSound from "../../../Audio/winLose/Win.wav";
import LoseSound from "../../../Audio/winLose/Lose.wav";
import RemisSound from "../../../Audio/winLose/Scream.wav";
import { useEffect } from "react";
import { setWhoWin } from "../../../_Reducer/StateFight";
import { useSelectorStateFight } from "../../../_Reducer/selectors/useSelectorStateFight";

export const useShowWinner = () => {
    const { whoWin, myTeam, enemyTeam, whoAttackID } = useSelectorStateFight();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log();
        if (whoWin || !whoAttackID) {
            return;
        }
        if (myTeam.length === 0 && enemyTeam.length === 0) {
            audioPlay(RemisSound);
            dispatch(setWhoWin("remis"));
        } else if (myTeam.length === 0) {
            audioPlay(LoseSound);
            dispatch(setWhoWin("lose"));
        } else if (enemyTeam.length === 0) {
            audioPlay(WinSound);
            dispatch(setWhoWin("win"));
        }
        return () => {
            setWhoWin("");
        };
    }, [myTeam.length, enemyTeam.length]);
};
