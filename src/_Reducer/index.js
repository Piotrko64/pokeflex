import FriendReducer from "./Friends";
import CoordinatesReducer from "./Movecss";
import { combineReducers } from "redux";
import YourItemsReducer from "./YourItems";
import SettingsReducer from "./Settings";

const allReducers = combineReducers({
    FriendsTeam: FriendReducer,
    CoordinatesReducer: CoordinatesReducer,
    YourItemsReducer: YourItemsReducer,
    SettingsReducer: SettingsReducer,
});
export default allReducers;
