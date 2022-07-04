import { useSelector } from "react-redux";
import { AllStateReducer } from "../../@types/_Reducer/AllStateReducer";

const UseSelectorSettings = () => {
    const volume = useSelector((state: AllStateReducer) => state.SettingsReducer.volume);
    return { volume };
};

export default UseSelectorSettings;
