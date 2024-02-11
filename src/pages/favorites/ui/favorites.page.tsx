import { WeatherCard } from "../../../entities/weather"
import { useWeatherInPlaceQuery, useFavoriteCitiesQuery } from "../../../features/weather-in-place"

export function Favorites() {
  const { data: weather } = useWeatherInPlaceQuery()
  const { data: favorites } = useFavoriteCitiesQuery()


  return (
    <div>
      <p><strong>Сайт может не работать без ВПН!</strong></p>
      Погода в Казани:
      {weather ?
        <WeatherCard weather={weather} /> : 'loading...'
      }
      Погода в любимых городах:
      {favorites && favorites.map(item => <WeatherCard key={item.name} weather={item} />)}
    </div>
  )
}