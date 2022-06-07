import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMyTeam, setWhoWin } from "../../../_Reducer/StateFight";

const useBeginFight = () => {
    const dispatch = useDispatch();
    const actualTeam = useSelector((state) => state.YourItemsReducer.TeamFight);
    const actualTokens = useSelector((state) => state.YourItemsReducer.TokensFight);
    const All = useSelector((state) => state);

    useEffect(() => {
        dispatch(setWhoWin(""));

        dispatch(setMyTeam([actualTeam, actualTokens]));
    }, []);
    return;
};

export default useBeginFight;
