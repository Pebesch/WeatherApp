const API_KEY = process.env.REACT_APP_APIXU_API_KEY;
//const currentEndpoint = "https://api.apixu.com/v1/current.json?key=";
const forecastEndpoint = "https://api.apixu.com/v1/forecast.json?key="
const autoEndpoint = "http://api.apixu.com/v1/search.json?key=";

const Apixu = {
  getForeCast(term, days) {
    return fetch(`${forecastEndpoint}${API_KEY}&q=${term}&days=${days}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if(!jsonResponse.forecast){
        return[];
      }
      var forecast = jsonResponse.forecast.forecastday.map(forecast => ({
        id: forecast.date_epoch,
        date: forecast.date,
        maxtemp_c: forecast.day.maxtemp_c,
        mintemp_c: forecast.day.mintemp_c,
        avgtemp_c: forecast.day.avgtemp_c,
        maxwind_kph: forecast.day.maxwind_kph,
        totalrecip_mm: forecast.day.totalrecip_mm,
        avgvis_km: forecast.day.avgvis_km,
        avghumidity: forecast.day.avghumidity,
        condition: {
          text: forecast.day.condition.text,
          icon: forecast.day.condition.icon,
          code: forecast.day.condition.code
        },
        uv: forecast.day.uv,
        astro: {
          sunrise: forecast.astro.sunrise,
          sunset: forecast.astro.sunset,
          moonrise: forecast.astro.moonrise,
          moonset: forecast.astro.moonset
        }
      }));

      var location = jsonResponse.location;

      var current = jsonResponse.current;

      var weatherdata = {location: location, current: current, forecast: forecast};
      return weatherdata;
    })
    .catch(error => {console.error(error)});
  },

  getAutocomplete(chars) {
    return fetch(`${autoEndpoint}${API_KEY}&q=${chars}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if(!jsonResponse){
        return [];
      }
      return jsonResponse.map(location => ({
        id: location.id,
        name: location.name,
        region: location.region,
        country: location.country,
        lat: location.lat,
        lon: location.lon,
        url: location.url
      }));
    });
  }
}

export default Apixu;
