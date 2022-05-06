import FriendReducer from "./Friends";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    FriendsTeam: FriendReducer,
});
export default allReducers;
