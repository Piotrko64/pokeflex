import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMyTeam, setWhoWin } from "../../_Actions/mainAction";

const UseBeginFight = () => {
    const dispatch = useDispatch();
    const actualTeam = useSelector((state) => state.YourItemsReducer.TeamFight);

    const w = useSelector((state) => state.FriendsTeam.whoWin);

    useEffect(() => {
        // dispatch(setWhoWin(""));
        // dispatch(setMyTeam(actualTeam));
        // setTimeout(() => {
        //     console.log(w);
        // }, 2000);
    }, []);
    return;
};

export default UseBeginFight;
