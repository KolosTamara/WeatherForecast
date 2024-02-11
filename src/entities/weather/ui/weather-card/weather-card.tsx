import { IWeather } from "../../model/weather.model"

type Props = {
  weather: IWeather
}

export function WeatherCard({ weather }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h1>
          {weather.name}
        </h1>
        <span>
          {weather.main.temp} С
        </span>
        <img className="w-5" src="src\entities\assets\cat.webp" alt="weather type image" />
        <button>
          Delete
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h2>
            Ветер
          </h2>
          <span>{weather.wind.speed} м/с </span>
        </div>
        <div className="flex flex-row">
          <h2>
            Давление
          </h2>
          <span>{weather.main.pressure} мм.рт.ст</span>
        </div>
        <div className="flex flex-row">
          <h2>
            Влажность
          </h2>
          <span>{weather.main.humidity} %</span>
        </div>
      </div>
    </div>
  )
}