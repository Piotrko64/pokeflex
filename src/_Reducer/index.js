import { combineReducers } from "redux";
import YourItemsReducer from "./YourItems";
import SettingsReducer from "./Settings";
import StateFightsReducer from "./StateFight";

const allReducers = combineReducers({
    StateFightsReducer,
    YourItemsReducer,
    SettingsReducer,
});
export default allReducers;
