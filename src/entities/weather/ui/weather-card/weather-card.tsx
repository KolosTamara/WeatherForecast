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
          -2.5 C
        </span>
        <img className="w-5" src="src\entities\weather\ui\cat.webp" alt="weather type image" />
        <button>
          Delete
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h2>
            Ветер
          </h2>
          <span>3 ms</span>
        </div>
        <div className="flex flex-row">
          <h2>
            Облачность
          </h2>
          <span>90%</span>
        </div>
        <div className="flex flex-row">
          <h2>
            Давление
          </h2>
          <span>109 hpa</span>
        </div>
        <div className="flex flex-row">
          <h2>
            Влажность
          </h2>
          <span>85%</span>
        </div>
      </div>
    </div>
  )
}