function updateTime(){
let nairobiElement=document.querySelector("#nairobi");
if(nairobiElement){
let nairobiDateElement=nairobiElement.querySelector(".date");
let nairobiTimeElement=nairobiElement.querySelector(".time");
let nairobiTime= moment().tz("Africa/Nairobi");

nairobiDateElement.innerHTML=nairobiTime.format("MMMM Do ,YYYY");

nairobiTimeElement.innerHTML=nairobiTime.format("h:mm:ss [<small>]A[<small/>]");
}

  
let sydneyElement=document.querySelector("#sydney");
if(sydneyElement){
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement=sydneyElement.querySelector(".time");
let sydneyTime= moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do ,YYYY");

sydneyTimeElement.innerHTML=sydneyTime.format("h:mm:ss [<small>]A[<small/>]");
}
};

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current"){
    cityTimeZone=moment.tz.guess();
  }
  if (cityTimeZone) {
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
                `;
    }
}

updateTime();
setInterval(updateTime , 1000);

let citiesSelect=document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);