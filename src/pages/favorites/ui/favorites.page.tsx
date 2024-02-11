import { WeatherCard } from "../../../entities/weather"
import { useWeatherInPlaceQuery } from "../../../features/weather-in-place"

export function Favorites() {
  const { data: weather } = useWeatherInPlaceQuery()

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
    </div>
  )
}