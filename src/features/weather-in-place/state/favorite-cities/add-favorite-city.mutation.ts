import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WeatherInPlaceApi } from "../../api/weather-in-place.api";
import { favoriteCitiesQueryKey } from "./favorite-cities.query";
import { IWeather } from "../../../../entities/weather/model/weather.model";

export function useAddFavoriteCityMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (cityName: string): Promise<IWeather> => {
      const favoriteWeathers = queryClient.getQueryData<IWeather[]>(favoriteCitiesQueryKey)
      const sameCity = (favoriteWeathers || []).find(CityWeather => CityWeather.name === cityName)

      if (sameCity) {
        return sameCity
      }

      const { data } = await WeatherInPlaceApi.findWeatherInCity(cityName)
      return data
    },
    onSuccess: (data) => {
      const favoriteWeathers = queryClient.getQueryData<IWeather[]>(favoriteCitiesQueryKey)
      if (favoriteWeathers) {
        const filteredFavorites = favoriteWeathers.filter(item => item.name !== data.name)
        queryClient.setQueryData(favoriteCitiesQueryKey, [data, ...filteredFavorites])
      }
    }
  })
}
