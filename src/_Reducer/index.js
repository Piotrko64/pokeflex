import { combineReducers } from "redux";
import YourItemsReducer from "./YourItems";
import SettingsReducer from "./Settings";
import StateFightsReducer from "./StateFight";

const allReducers = combineReducers({
    FriendsTeam: StateFightsReducer,

    YourItemsReducer: YourItemsReducer,
    SettingsReducer: SettingsReducer,
});
export default allReducers;
