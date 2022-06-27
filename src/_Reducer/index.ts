import { yourItemsInterface } from "./../types/_Reducer/yourItems";
import { combineReducers } from "redux";
import YourItemsReducer from "./YourItems";
import SettingsReducer from "./Settings";
import StateFightsReducer from "./StateFight";
import { stateFightInterface } from "../types/_Reducer/stateFight";

export const allReducers = combineReducers({
    StateFightsReducer,
    YourItemsReducer,
    SettingsReducer,
});
