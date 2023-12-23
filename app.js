const input = document.querySelector("#locality")
const button = document.querySelector("#btn")
const container = document.querySelector(".container")

async function getMeteoData() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=70d79bef89b2412db04175551232312&q=${input.value}&aqi=no`)
    const data = await response.json()
    const responseForecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=70d79bef89b2412db04175551232312&q=${input.value}&days=1&aqi=no&alerts=no`)
    const dataForecast = await responseForecast.json()
    const dataLocation = data.location
    const dataLocationName = dataLocation.name
    const dataCurrent = data.current
    const dataCondition = dataCurrent.condition
    container.innerHTML = `
    <h1>${dataLocationName}</h1>
    <img src="${dataCondition.icon} ">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">adesso</th>
      <th scope="col">condizioni ${dataCondition.text}</th>
      <th scope="col"> velocità del vento ${dataCurrent.wind_mph} Kmh</th>
      <th scope="col">temperatura al suolo ${dataCurrent.temp_c}°</th>
    </tr>
  </thead>
  
  
  </tbody>
</table>
<button type="button" class="btn btn-outline-primary" id="btn-reverse">Primary</button>
    `
    const btnReverse = document.querySelector("#btn-reverse")
    btnReverse.addEventListener("click", () => {
        location.reload()
    })
    console.log(dataCondition);
    // console.log(data);
    console.log(input.value);
}
button.addEventListener("click", getMeteoData)
