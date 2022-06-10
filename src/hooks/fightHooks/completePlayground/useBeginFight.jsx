import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMyTeam, setWhoWin } from "../../../_Reducer/StateFight";

const useBeginFight = () => {
    const dispatch = useDispatch();
    const actualTeam = useSelector((state) => state.YourItemsReducer.teamFight);
    const actualTokens = useSelector((state) => state.YourItemsReducer.tokensFight);

    useEffect(() => {
        dispatch(setWhoWin(""));

        dispatch(setMyTeam([actualTeam, actualTokens]));
    }, []);
};

export default useBeginFight;
