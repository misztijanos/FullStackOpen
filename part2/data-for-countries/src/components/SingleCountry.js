import axios from 'axios'
import { useEffect, useState } from 'react'
import Weather from './Weather'

const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState({})

  const capital = country.capital[0]
  const [lat, lon] = country.capitalInfo.latlng

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then((response) => {
        setWeather(response.data)
        console.log('Weather: ', response.data)
      })
  }, [lat, lon])

  const languages = Object.values(country.languages)

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>

      <h2>languages:</h2>
      <ul>
        {languages.map((lan) => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" width="140px" />
      <Weather city={capital} weather={weather} />
    </div>
  )
}

export default SingleCountry
