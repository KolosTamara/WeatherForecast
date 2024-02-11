import { ChangeEvent, useState, KeyboardEvent } from "react"
import { useAddFavoriteCityMutation } from "../../../../features/weather-in-place"

export function GlobalSearch() {
  const [value, setValue] = useState<string>('')

  const { mutateAsync: addFavoriteCity } = useAddFavoriteCityMutation()

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      addFavoriteCity(value)
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }


  return (
    <div>
      I am Search
      <input type="search" placeholder="Название города" value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
    </div>
  )
}