function updateWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
 let cityElement=document.querySelector("#city");
 cityElement.innerHTML=response.data.city;
 temperatureElement.innerHTML=Math.round(temperature);

}




function searchCity(city){
    let apiKey="6o839fc2f6c15f59b0t9a2b6fa44a10b";
    let apiURL= ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(updateWeather);

}



function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    searchCity (searchInput.value);
}


let searchFormatElement=document.querySelector("#search-form");
searchFormatElement.addEventListener("submit",handleSearchSubmit);

searchCity("Polokwane");