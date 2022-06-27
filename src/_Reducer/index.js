import { combineReducers } from "redux";
import YourItemsReducer from "./YourItems";
import SettingsReducer from "./Settings";
import StateFightsReducer from "./StateFight";

export const allReducers = combineReducers({
    StateFightsReducer,
    YourItemsReducer,
    SettingsReducer,
});
