const Settings = {
    Volume: localStorage.getItem("volume") || 1,
};

const SettingsReducer = (state = Settings, action) => {
    switch (action.type) {
        case "changeVolume":
            return { ...state, Volume: action.payload };

        default:
            return state;
    }
};

export default SettingsReducer;
