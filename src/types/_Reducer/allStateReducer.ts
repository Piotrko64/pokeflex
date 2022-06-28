import { settingsInterface } from "./settings";
import { stateFightInterface } from "./stateFight";
import { yourItemsInterface } from "./yourItems";
export interface allStateReducer {
    YourItemsReducer: yourItemsInterface;
    StateFightsReducer: stateFightInterface;
    SettingsReducer: settingsInterface;
}
