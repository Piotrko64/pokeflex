import { createSlice } from "@reduxjs/toolkit";

const Settings = {
    Volume: localStorage.getItem("volume") || 0.75,
};

const SliceSettings = createSlice({
    name: "Settings",
    initialState: Settings,
    reducers: {
        changeVolume: (state, action) => {
            localStorage.setItem("volume", action.payload);
            return { ...state, Volume: action.payload };
        },
    },
});

const SettingsReducer = (state = Settings, action) => {
    switch (action.type) {
        case "changeVolume":
            localStorage.setItem("volume", action.payload);
            return { ...state, Volume: action.payload };

        default:
            return state;
    }
};

export default SettingsReducer;
