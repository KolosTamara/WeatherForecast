import { useMutation, useQueryClient } from "@tanstack/react-query";
import { weatherInPlaceQueryKey } from "../weather-in-place.query";
import { WeatherInPlaceApi } from "../../api/weather-in-place.api";
import { favoriteCitiesQueryKey } from "./favorite-cities.query";
import { IWeather } from "../../../../entities/weather/model/weather.model";

export function useAddFavoriteCityMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ cityName }: { cityName: string }) => WeatherInPlaceApi.findWeatherInCity(cityName),
    onSuccess: ({ data: weatherInCity }) => {
      const favoriteWeathers = queryClient.getQueryData<IWeather[]>(favoriteCitiesQueryKey)
      if (favoriteWeathers) {
        queryClient.setQueryData(favoriteCitiesQueryKey, [...favoriteWeathers, weatherInCity])
      }
    }
  })
}