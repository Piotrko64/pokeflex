import { useSelector } from "react-redux";

const UseSelectorSettings = () => {
    const volume = useSelector((state) => state.SettingsReducer.volume);
    return { volume };
};

export default UseSelectorSettings;
