interface IWeatherType {
  main: string,
  description: string,
  icon: string
}
interface IWeatherMeasurements {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
}
interface IWind {
  speed: number,
  deg: number,
}

export interface IWeather {
  weather: IWeatherType[],
  main: IWeatherMeasurements,
  wind: IWind
  name: string
}