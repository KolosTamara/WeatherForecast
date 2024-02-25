import { useQuery } from "@tanstack/react-query"
import { WeatherInPlaceApi } from "../api/weather-in-place.api"
import { IWeather } from "../../../entities/weather/model/weather.model";
import { wait } from "../../../shared/timeout";

export const weatherInPlaceQueryKey = ["weather-in-place"]
export function useWeatherInPlaceQuery() {
  return useQuery<IWeather>({
    queryKey: weatherInPlaceQueryKey,
    queryFn: async () => {
      let isLoading = true;
      let location: GeolocationPosition | null = null;

      if (navigator?.geolocation?.getCurrentPosition) {
        navigator.geolocation.getCurrentPosition((position) => {
          location = position;
          isLoading = false;
        }, () => { isLoading = false });


        while (isLoading) {
          await wait(1000)
        }

        if (location) {
          const { latitude, longitude } = (location as GeolocationPosition).coords ?? {};
          const { data } = await WeatherInPlaceApi.getWeatherByCords(latitude, longitude)
          return data
        }
      }
      const { data } = await WeatherInPlaceApi.findWeatherInCity("Minsk")
      return data

    }
  })
} 