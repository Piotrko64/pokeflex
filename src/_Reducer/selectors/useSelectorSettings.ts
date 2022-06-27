import { useSelector } from "react-redux";

const UseSelectorSettings = () => {
    const volume = useSelector((state: any) => state.SettingsReducer.volume);
    return { volume };
};

export default UseSelectorSettings;
