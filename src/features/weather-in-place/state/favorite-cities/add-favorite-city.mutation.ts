import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WeatherInPlaceApi } from "../../api/weather-in-place.api";
import { favoriteCitiesQueryKey } from "./favorite-cities.query";
import { IWeather } from "../../../../entities/weather/model/weather.model";

export function useAddFavoriteCityMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (cityName: string) => WeatherInPlaceApi.findWeatherInCity(cityName),
    onSuccess: ({ data }) => {
      const favoriteWeathers = queryClient.getQueryData<IWeather[]>(favoriteCitiesQueryKey)
      if (favoriteWeathers) {
        queryClient.setQueryData(favoriteCitiesQueryKey, [...favoriteWeathers, data])
      }
    }
  })
}
