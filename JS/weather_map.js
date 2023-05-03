"use strict";

//  Added mapbox
mapboxgl.accessToken = OPEN_MAPBOX_APPID;


let map = new mapboxgl.Map(
    {
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v11/', // style URL
        zoom: 8, // starting zoom
        center: [-79.792, 36.0726] // [lng, lat]
    });


// adding starting marker  and geocoder
const marker = new mapboxgl.Marker({
    draggable : true
})
    .setLngLat([-79.792, 36.0726])
    .addTo(map)

let geocoder = new MapboxGeocoder({
    accessToken: OPEN_MAPBOX_APPID,
    mapboxgl: mapboxgl,
    fuzzyMatch: true,
    marker: false
})

// function for moving the marker and changing the weather at the end of marker drag
geocoder.on('result', e => {

    const marker = new mapboxgl.Marker({
        draggable: true,

    })
        .setLngLat(e.result.center)
        .addTo(map)
    marker.on('dragend',function(e){

        let lngLat = e.target.getLngLat();
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lon: lngLat['lng'],
            lat: lngLat['lat'],
            units: "imperial"
        }).done(function (weatherData) {
            let weatherDay = weatherData.list
            function WeatherWeek() {

                $('#forecast').html(`<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[0].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[0].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[0].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[0].main.temp_min}°F / ${weatherDay[0].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[8].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[8].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[8].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[8].main.temp_min}°F / ${weatherDay[8].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[16].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[16].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[16].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[16].main.temp_min}°F / ${weatherDay[16].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[24].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[24].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[24].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[24].main.temp_min}°F / ${weatherDay[24].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[32].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[32].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[32].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[32].main.temp_min}°F / ${weatherDay[32].main.temp_max}°F</div></div></div>`)

            }

            WeatherWeek()
        });

    })
})
map.addControl(geocoder)

//  Geocoder function that chages the forecast on city search
$('input').change(function () {
    let newCity = $(this).val()
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/q=${(encodeURIComponent(newCity))}.json?access_token=${OPEN_MAPBOX_APPID}`, {}).done(function (PositionData) {
        let lng = PositionData.features[0].geometry.coordinates[0]
        let lat = PositionData.features[0].geometry.coordinates[1]
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lon: lng,
            lat: lat,
            units: "imperial"
        }).done(function (weatherData) {
            let weatherDay = weatherData.list
marker.remove()
            function WeatherWeek() {

                $('#forecast').html(`<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[0].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[0].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[0].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[0].main.temp_min}°F / ${weatherDay[0].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[8].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[8].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[8].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[8].main.temp_min}°F / ${weatherDay[8].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[16].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[16].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[16].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[16].main.temp_min}°F / ${weatherDay[16].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[24].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[24].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[24].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[24].main.temp_min}°F / ${weatherDay[24].main.temp_max}°F</div></div></div>

<div class="card col-8 m-4"><div class="card-body"><h5 class="card-title"> ${weatherData.list[32].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[32].weather[0].description}</h6><img src="https://openweathermap.org/img/wn/${weatherDay[32].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[32].main.temp_min}°F / ${weatherDay[32].main.temp_max}°F</div></div></div>`)

            }

            WeatherWeek()
        });
    })
})

//  Starting weather location for city I live in
$.get("https://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    q: "Greensboro, US",
    units: "imperial"
}).done(function (weatherData) {
    let weatherDay = weatherData.list


    function weatherWeek() {
        for (let i = 0; i < 40; i += 8) {
            $('#forecast').append(`<div class="card col-8 m-4"><div class="card-body d-flex flex-column align-items-center"><h5 class="card-title"> ${weatherData.list[i].dt_txt}</h5><h6 class="card-subtitle text-body-secondary text-capitalize">${weatherDay[i].weather[0].description}</h6><img class="h-50 w-50"  src="https://openweathermap.org/img/wn/${weatherDay[i].weather[0].icon}@2x.png"><div class="text-center">${weatherDay[i].main.temp_min}°F / ${weatherDay[i].main.temp_max}°F</div></div></div>`)
        }
    }

    weatherWeek()
});


