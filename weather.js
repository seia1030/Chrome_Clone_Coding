const CurLocation= document.querySelector(".js-location");
const CurWeather= document.querySelector(".js-weather");
const API_KEY="96d1e7975c7e926e234774358a9f359d";
const COORDS='coords';

function getWeather(lat,lng){
fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature=json.main.temp;
        const place=json.name;
        CurLocation.innerText=`${place}`;
        CurWeather.innerText=`${temperature}`;
    });
}

function saveCoords(coordsOb ){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
     const latitude=position.coords.latitude;
     const longitude=position.coords.longitude;
     const coordsObj ={
         latitude:latitude,
         longitude:longitude
     };
     saveCoords(coordsObj);
     getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("정보를 가져오는데에 실패하였습니다.");
}

function Ask_For_Coords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function Load_Coords(){
    const Loaded_Coords=localStorage.getItem(COORDS);
    if(Loaded_Coords==null){
        Ask_For_Coords();
    }
    else{
        const parsedCoords=JSON.parse(Loaded_Coords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);

    }
}

function init(){
    Load_Coords();
}

init();
