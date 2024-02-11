import axios from "axios"
import { IWeather } from "../../../entities/weather/model/weather.model"

export const WeatherInPlaceApi = {
  async getWeather() {
    return axios.get<IWeather>("https://api.openweathermap.org/data/2.5/weather?q=Казань&appid=71d31aa0fa80b76923fd889e32f0d07f&units=metric&lang=ru")
  },
  async findWeatherInCity(cityName: string) {
    return axios.get<IWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=71d31aa0fa80b76923fd889e32f0d07f&units=metric&lang=ru`)
  }
}