import { useQuery } from "@tanstack/react-query"
import { IWeather } from "../../../../entities/weather/model/weather.model"

export const favoriteCitiesQueryKey = ["favorite-cities"]

export function useFavoriteCitiesQuery() {
  return useQuery<IWeather[]>({
    queryKey: favoriteCitiesQueryKey,
    queryFn: async () => {
      return []
    }
  })
} 