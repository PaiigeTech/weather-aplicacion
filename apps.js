function handleSearchSubmit(event){
    event.prevent();
    let searchInput=document.querySelector("#search-form-input");
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=searchInput.value
}


let searchFormatElement=document.querySelector("#search-form");
searchFormatElement.addEventListener("submit",handleSearchSubmit);