import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UseSelectorYourItems from "../../../_Reducer/selectors/useSelectorYourItems";

import { setMyTeam, setWhoWin } from "../../../_Reducer/StateFight";

export const useBeginFight = () => {
    const dispatch = useDispatch();
    const { teamFight, tokensFight } = UseSelectorYourItems();

    useEffect(() => {
        dispatch(setWhoWin(""));

        dispatch(setMyTeam([teamFight, tokensFight]));
    }, []);
};
