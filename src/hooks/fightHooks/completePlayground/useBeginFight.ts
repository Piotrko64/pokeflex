import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseSelectorYourItems from "../../../_Reducer/selectors/useSelectorYourItems";

import { setMyTeam, setWhoWin } from "../../../_Reducer/StateFight";

export const useBeginFight = () => {
    const dispatch = useDispatch();
    const { PokemonsTeamSelect, TokensTeamSelect } = UseSelectorYourItems();

    useEffect(() => {
        dispatch(setWhoWin(""));

        dispatch(setMyTeam([PokemonsTeamSelect, TokensTeamSelect]));
    }, []);
};
