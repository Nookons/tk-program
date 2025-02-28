
import Home from "./pages/Home/Home";
import {
    HOME_ROUTE, STATION_ROUTE,
} from "./utils/const";
import Station from "./pages/Station/Station";

interface Route {
    path: string;
    Component: React.ComponentType<any>;
}

type PublicRoutes = Route[];

export const publicRoutes: PublicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: STATION_ROUTE,
        Component: Station,
    },
];