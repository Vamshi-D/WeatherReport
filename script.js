// let key = "7b4dd9aa8c65c240b1f427cb4db1a34c"
// let url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=b4dd9aa8c65c240b1f427cb4db1a34c"

let input = document.getElementById("location")
let btn = document.getElementById("btn")
let  temperature= document.getElementById("temp")
let humidity = document.getElementById("hum")
let description = document.getElementById("description")

// console.log(input)
// console.log(btn)
// console.log(temperature)
// console.log(humidity)

let checkweatherDetails = async(city)=>{
    let key = "7b4dd9aa8c65c240b1f427cb4db1a34c"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    let weather1 = await fetch(url)
    let weather2 = await weather1.json()
    // console.log(weather2)
    // console.log(weather1)
    // console.log(weather2.weather[0].main)
    let celcius = Math.round (weather2.main.temp-273)
    // console.log(weather2.temp-273)
    temperature.innerHTML=`${celcius}<sup>0</sup> C`
    humidity.innerHTML=`${weather2.main.humidity}%`
    description.innerHTML=`${weather2.weather[0].description}`

}

btn.addEventListener("click",()=>{
    checkweatherDetails(input.value)
})





