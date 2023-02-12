function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg",
    "clear-sky-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg",
    "few-clouds-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg",
    "few-clouds-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night.svg",
    "scattered-clouds-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg",
    "scattered-clouds-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/overcast-night.svg",
    "broken-clouds-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg",
    "broken-clouds-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night.svg",
    "shower-rain-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-drizzle.svg",
    "shower-rain-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-drizzle.svg",
    "rain-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-rain.svg",
    "rain-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-rain.svg",
    "thunderstorm-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-day.svg",
    "thunderstorm-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-night.svg",
    "snow-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-snow.svg",
    "snow-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-snow.svg",
    "mist-day":
      "https://basmilius.github.io/weather-icons/production/fill/all/fog-day.svg",
    "mist-night":
      "https://basmilius.github.io/weather-icons/production/fill/all/fog-night.svg",
  };
  return <img src={codeMapping[props.code]} alt={props.code} />;
}
export default WeatherIcon;
