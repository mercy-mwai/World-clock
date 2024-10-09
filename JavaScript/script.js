function showCity(response){
 let cityElement=document.querySelector("#city");
 response.data.forEach(function (timezone) {
  let option = document.createElement("option");
  option.value = timezone; 
  option.textContent = timezone; 
  cityElement.appendChild(option);
});

};
let apiUrl="http://worldtimeapi.org/api/timezone";
axios.get(apiUrl).then(showCity);

function updateTime(){
    //nairobi
let nairobiElement=document.querySelector("#nairobi");
if(nairobiElement){
let nairobiDateElement=nairobiElement.querySelector(".date");
let nairobiTimeElement=nairobiElement.querySelector(".time");
let nairobiTime= moment().tz("Africa/Nairobi");

nairobiDateElement.innerHTML=nairobiTime.format("MMMM Do ,YYYY");

nairobiTimeElement.innerHTML=nairobiTime.format("h:mm:ss [<small>]A[<small/>]");
}

  //sydney
let sydneyElement=document.querySelector("#sydney");
if(sydneyElement){
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement=sydneyElement.querySelector(".time");
let sydneyTime= moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do ,YYYY");

}
};

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current"){
    cityTimeZone=moment.tz.guess();
  }
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities-container");
citiesElement.innerHTML = `
   <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
   </div>
          <a href="/">All cities</a>
            `;

};

updateTime();
setInterval(updateTime , 1000);

let citiesSelect=document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);