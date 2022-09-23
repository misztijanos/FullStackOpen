const Weather = ({ city, weather }) =>
  weather.main ? (
    <div>
      <h2>Weather in {city}</h2>
      <p>temperature: {weather.main.temp} Celsius</p>
      <img
        src={
          'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'
        }
        alt=""
        width="100px"
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  ) : (
    <p>Couldn't fetch weather data</p>
  )

export default Weather
