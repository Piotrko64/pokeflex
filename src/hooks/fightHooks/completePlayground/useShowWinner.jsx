import { useDispatch, useSelector } from "react-redux";
import { audioPlay } from "../../../functions/audioPlay";

import WinSound from "../../../Audio/winLose/Win.wav";
import LoseSound from "../../../Audio/winLose/Lose.wav";
import RemisSound from "../../../Audio/winLose/Scream.wav";
import { useEffect } from "react";
import { setWhoWin } from "../../../_Reducer/StateFight";

export const useShowWinner = () => {
    const friendsTeam = useSelector((state) => state.StateFightsReducer.myTeam);
    const enemyTeam = useSelector((state) => state.StateFightsReducer.enemyTeam);

    const win = useSelector((state) => state.StateFightsReducer.whoWin);

    const dispatch = useDispatch();

    useEffect(() => {
        if (win) {
            return;
        }
        if (friendsTeam.length === 0 && enemyTeam.length === 0) {
            audioPlay(RemisSound);
            dispatch(setWhoWin("remis"));
        } else if (friendsTeam.length === 0) {
            audioPlay(LoseSound);
            dispatch(setWhoWin("lose"));
        } else if (enemyTeam.length === 0) {
            audioPlay(WinSound);
            dispatch(setWhoWin("win"));
        }
        return () => {
            setWhoWin("");
        };
    }, [friendsTeam.length, enemyTeam.length]);
};
