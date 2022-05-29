import ChooseLevel from "../../pages/ChooseLevel";
import MainPage from "../../pages/Main";
import QuickGame from "../../pages/QuickGame";
import SingleLevel from "../../pages/SingleLevel";
import MainComponentSelectTeam from "../SelectTeam/MainComponentSelectTeam";
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
        path: "/SelectTeam",
        element: <MainComponentSelectTeam />,
    },
    {
        path: "/levels/:id",
        element: <SingleLevel />,
    },
];

export const AnimateList = ListRouting.map((el) => ({
    ...el,
    element: <AnimateRoute>{el.element}</AnimateRoute>,
}));
