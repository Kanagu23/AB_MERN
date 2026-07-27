const ciytInput= document.getElementById("cityInput")
const searchBtn=document.getElementById("searchBtn")
const cityTitle=document.getElementById("cityTitle")
const degNum=document.getElementById("degNum")
const weatherBox=document.getElementById("weatherBox")
const icon=document.getElementById("icon")
const iconDesc=document.getElementById("iconDesc")
const minDeg=document.getElementById("minDeg")
const maxDeg=document.getElementById("maxDeg")

const APPID="962e9e1879bd2d96a4c003b1006e037f"
const getWeatherData=async(city)=>{

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APPID}&units=metric`

const response=await fetch(apiUrl)
const Wdata=await response.json()
const iconUrl=`https://openweathermap.org/img/wn/${Wdata.weather[0].icon}@2x.png`;
icon.src=iconUrl
console.log(Wdata)
iconDesc.innerText=Wdata.weather[0].description
weatherBox.style.display="flex"
cityTitle.innerText=Wdata.name
degNum.innerText=Wdata.main.temp
minDeg.innerText=Wdata.main.temp_min
maxDeg.innerText=Wdata.main.temp_max
}

const getCurrentPos=async(pos)=>{
    const apiUrl=`"https://api-bdc.net/data/reverse-geocode?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en&key=bdc_aea03ce91ae74526aa812db582994725`
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
    ciytInput.value=""
    console.log(city)
})
if ("geolocation" in navigator) {
  /* geolocation is available */
 navigator.geolocation.getCurrentPosition((pos)=>{
console.log(pos)
getCurrentPos(pos)
  })
} else {
  /* geolocation IS NOT available */
}