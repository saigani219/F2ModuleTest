

/* <div class="card">
                 <img src="./images/Rectangle 1.png" alt="not able to find">
                <img class="weather" src="./images/Sun cloud angled rain.png" alt="not able to find">
                <div class="temperature">25</div>
                <div class="H">H:</div>
                <div class="L">L:</div>
                <div class="place">Tokyo, Japan</div>
                <div class="weather-type">Showers</div> 


            </div> */

//searching a city getting an city Object

let cities = new Set();
let arr = [];
async function getweather(){

    //retrieving the input entered by user
    const search = document.getElementById("city-search");
    const city = (String)(search.value);
    if(city === "" || cities.has(city))
    return;

    cities.add(city);
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b821ddca3ad4f138a89d90a8c9d3b022&units=metric";

    let response = await fetch(url);

    let data = await response.json();
    console.log(data);

    let cards = document.getElementsByClassName("cities");
    const name = data.name;
    const min_temp = data.main.temp_min;
    const max_temp = data.main.temp_max;
    const temp = data.main.temp;
    const cloudpercentage = data.clouds.all;
    const weather = data.weather[0];

    let newCard = document.createElement("div");
    newCard.className = "card";
    let rect = document.createElement("img");
    rect.src="./Rectangle 1.png";
    newCard.appendChild(rect);
    let condition = document.createElement("img");
    condition.className="weather";
    const desc = document.createElement("div");
    desc.className="weather-type";
    if(weather.main.toLowerCase().includes("sun")){
    condition.src = "./Sun cloud angled rain.png";
    }
    else if(weather.main.toLowerCase().includes("rain")){
        condition.src = "./Moon cloud mid rain.png"; 
    }
    else if(weather.main.toLowerCase().includes("wind")){
        condition.src = "./Tornado.png"; 
    }
    else{
        condition.src = "./Moon cloud fast wind.png"; 
    }
    desc.innerText = weather.description;
    newCard.appendChild(condition);

    const temperature = document.createElement("div");
    temperature.className = "temperature";
    temperature.innerText = temp;
    newCard.appendChild(temperature);

    const maxtemp = document.createElement("div");
    maxtemp.className="H";
    maxtemp.innerText = "H:" + max_temp;
    newCard.appendChild(maxtemp);

    const mintemp = document.createElement("div");
    mintemp.className="L";
    mintemp.innerText = "L:" + min_temp;
    newCard.appendChild(mintemp);

    const citysearched = document.createElement("div");
    citysearched.className="place";
    citysearched.innerText = name;
    newCard.appendChild(citysearched);

    newCard.appendChild(desc);

    let block = document.getElementsByClassName("cities")[0];
    block.appendChild(newCard);
    arr.push(newCard);

}

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", getweather);
