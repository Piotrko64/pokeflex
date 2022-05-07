import FriendReducer from "./Friends";
import CoordinatesReducer from "./Movecss";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    FriendsTeam: FriendReducer,
    CoordinatesReducer: CoordinatesReducer,
});
export default allReducers;
