import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMyTeam, setWhoWin } from "../../_Actions/mainAction";

const useBeginFight = () => {
    const dispatch = useDispatch();
    const actualTeam = useSelector((state) => state.YourItemsReducer.TeamFight);
    const actualTokens = useSelector((state) => state.YourItemsReducer.TokensFight);

    useEffect(() => {
        dispatch(setWhoWin(""));

        dispatch(setMyTeam(actualTeam, actualTokens));
    }, []);
    return;
};

export default useBeginFight;
