import {
  Route,
  createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import { Favorites } from "../../../pages/favorites";
import { CityWeather } from "../../../pages/city-weather";
import { AppLayout } from "../ui/app-layout/app-layout";

const LayoutApp = Route

export const router = createBrowserRouter(
  createRoutesFromElements(
    <LayoutApp element={<AppLayout />}>
      <Route path="/" element={<Favorites />} />
      <Route path="/city/:id" element={<CityWeather />} />
    </LayoutApp>
  ));
