import {
  createBrowserRouter,
} from "react-router-dom";
import { Favorites } from "../../../pages/favorites";
import { CityWeather } from "../../../pages/city-weather";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Favorites />,
  },
  {
    path: "/city/:id",
    element: <CityWeather />,
  },
]);
