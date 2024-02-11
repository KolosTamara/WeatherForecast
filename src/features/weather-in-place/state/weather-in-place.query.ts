import { useQuery } from "@tanstack/react-query"
import { WeatherInPlaceApi } from "../api/weather-in-place.api"

export const weatherInPlaceQueryKey = ["weather-in-place"]
export function useWeatherInPlaceQuery() {
  return useQuery({
    queryKey: weatherInPlaceQueryKey,
    queryFn: async () => {
      const { data } = await WeatherInPlaceApi.getWeather()
      return data
    }
  })
} 