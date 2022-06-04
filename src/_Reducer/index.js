import FriendReducer from "./StateFight";

import { combineReducers } from "redux";
import YourItemsReducer from "./YourItems";
import SettingsReducer from "./Settings";

const allReducers = combineReducers({
    FriendsTeam: FriendReducer,

    YourItemsReducer: YourItemsReducer,
    SettingsReducer: SettingsReducer,
});
export default allReducers;
