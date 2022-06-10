import { useDispatch, useSelector } from "react-redux";
import audioPlay from "../../../functions/audioPlay";

import WinSound from "../../../Audio/winLose/Win.wav";
import LoseSound from "../../../Audio/winLose/Lose.wav";
import RemisSound from "../../../Audio/winLose/Scream.wav";
import { useEffect } from "react";
import { setWhoWin } from "../../../_Reducer/StateFight";

const UseShowWinner = () => {
    const FriendsTeam = useSelector((state) => state.FriendsTeam.myTeam);
    const EnemyTeam = useSelector((state) => state.FriendsTeam.enemyTeam);

    const Win = useSelector((state) => state.FriendsTeam.whoWin);

    const dispatch = useDispatch();

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
    return;
};

export default UseShowWinner;
