import { useQuery } from "@tanstack/react-query"
import { WeatherInPlaceApi } from "../api/weather-in-place.api"
import { IWeather } from "../../../entities/weather/model/weather.model";
import { getCurrentPosition } from "../../../shared/navigator";

export const weatherInPlaceQueryKey = ["weather-in-place"]
export function useWeatherInPlaceQuery() {
  return useQuery<IWeather>({
    queryKey: weatherInPlaceQueryKey,
    queryFn: async () => {
      const location = await getCurrentPosition()

      if (location) {
        const { latitude, longitude } = (location as GeolocationPosition).coords ?? {};
        const { data } = await WeatherInPlaceApi.getWeatherByCords(latitude, longitude)
        return data
      }

      const { data } = await WeatherInPlaceApi.findWeatherInCity("Minsk")
      return data

    }
  })
} 