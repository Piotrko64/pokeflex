import FriendReducer from "./Friends";
import CoordinatesReducer from "./Movecss";
import { combineReducers } from "redux";
import YourItemsReducer from "./YourItems";

const allReducers = combineReducers({
    FriendsTeam: FriendReducer,
    CoordinatesReducer: CoordinatesReducer,
    YourItemsReducer: YourItemsReducer,
});
export default allReducers;
