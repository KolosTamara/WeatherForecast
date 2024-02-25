import { IWeather } from "../../model/weather.model"

type Props = {
  weather: IWeather
}

export function WeatherCard({ weather }: Props) {
  return (
    <div className="border rounded-md border-solid flex flex-col w-fit">
      <div className="flex flex-row gap-x-3">
        <h1>
          {weather.name}
        </h1>
        <span>
          {weather.main.temp} С
        </span>
        <img className="w-6" src={`src/entities/assets/${weather.weather[0]?.icon}@2x.png`} alt="weather type image" />
        <button>
          Delete
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h2>
            Ветер
          </h2>
          <span>{weather.wind.speed} м/с </span>
        </div>
        <div className="flex flex-row justify-between">
          <h2>
            Давление
          </h2>
          <span>{weather.main.pressure} мм.рт.ст</span>
        </div>
        <div className="flex flex-row justify-between">
          <h2>
            Влажность
          </h2>
          <span>{weather.main.humidity} %</span>
        </div>
      </div>
    </div>
  )
}