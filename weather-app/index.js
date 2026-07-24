const ciytInput= document.getElementById("cityInput")
const searchBtn=document.getElementById("searchBtn")
const getWeatherData=async(city)=>{

const APPID=""
const apiUrl=`https://api.openweathermap.org/data/4.0/weather?q=${city}&appid=${""}&units=metric`
const zip=628001
  var url = "http://api.openweathermap.org/data/2.5/weather?" + 
            "zip=" + zip +
            "&APPID=" + APPID;

const response=await fetch(apiUrl)
console.log(response)
}

searchBtn.addEventListener("click",()=>{
    const city = ciytInput.value.trim();
    if(city==="")
    {
        alert("Please enter a city")
        return;
    }
    const weatherData= getWeatherData(city)
    console.log(city)
})