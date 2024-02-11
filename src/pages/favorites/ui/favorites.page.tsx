import { WeatherCard } from "../../../entities/weather"
import { useWeatherInPlaceQuery, useFavoriteCitiesQuery } from "../../../features/weather-in-place"

export function Favorites() {
  const { data: weather } = useWeatherInPlaceQuery()
  const { data: favorites } = useFavoriteCitiesQuery()


  return (
    <div>
      ПоГОдА в ГоМеЛЕ!!!!
      <a href="city/msk">
        МОСКВА
      </a>
      <a href="city/spb" className="text-3xl font-bold underline">
        Ленинград
      </a>
      {weather ?
        <WeatherCard weather={weather} /> : 'loading...'
      }
      AAAAAAAAAAAAAAAAAAAAA
      {favorites && favorites.map(item => <WeatherCard key={item.name} weather={item} />)}
    </div>
  )
}