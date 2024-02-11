import axios from "axios"
import { IWeather } from "../../../entities/weather/model/weather.model"

export const WeatherInPlaceApi = {
  async getWeather() {
    return axios.get<IWeather>("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=71d31aa0fa80b76923fd889e32f0d07f&units=metric")
  }
}