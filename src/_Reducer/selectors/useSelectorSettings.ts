import { useSelector } from "react-redux";
import { allStateReducer } from "../../types/_Reducer/allStateReducer";

const UseSelectorSettings = () => {
    const volume = useSelector((state: allStateReducer) => state.SettingsReducer.volume);
    return { volume };
};

export default UseSelectorSettings;
