import ChooseLevel from "../../pages/ChooseLevel";
import MainPage from "../../pages/MainPage";
import QuickGame from "../../pages/QuickGame";
import SelectTeam from "../../pages/SelectTeam";
import SingleLevel from "../../pages/SingleLevel";

import AnimateRoute from "./AnimateRoute";

export const ListRouting = [
    {
        path: "/QuickGame",
        element: <QuickGame />,
    },
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/ChooseLevel",
        element: <ChooseLevel />,
    },

    {
        path: "/levels/:id",
        element: <SingleLevel />,
    },
    {
        path: "SelectTeam",
        element: <SelectTeam />,
    },
    {
        path: "*",
        element: <MainPage />,
    },
    {
        path: "/levels/*",
        element: <MainPage />,
    },
];

export const AnimateList = ListRouting.map((el) => ({
    ...el,
    element: <AnimateRoute>{el.element}</AnimateRoute>,
}));
