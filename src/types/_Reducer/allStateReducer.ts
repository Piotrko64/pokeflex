import { SettingsInterface } from "./Settings";
import { StateFightInterface } from "./StateFight";
import { YourItemsInterface } from "./YourItems";

export interface AllStateReducer {
    YourItemsReducer: YourItemsInterface;
    StateFightsReducer: StateFightInterface;
    SettingsReducer: SettingsInterface;
}
