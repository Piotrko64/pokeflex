import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelectorYourItems } from "../../../_Reducer/selectors/useSelectorYourItems";
import { setMyTeam, setWhoWin } from "../../../_Reducer/StateFight";

export const useBeginFight = () => {
    const dispatch = useDispatch();
    const { teamFight, tokensFight } = useSelectorYourItems();

    useEffect(() => {
        dispatch(setWhoWin(""));

        dispatch(setMyTeam([teamFight, tokensFight]));
    }, []);
};
