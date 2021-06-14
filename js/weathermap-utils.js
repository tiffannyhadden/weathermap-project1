

function fetchForecast(coordinates) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_APPID,
            lat: coordinates[0],
            lon: coordinates[1],
            units: "imperial"
        },
        success: function(data){
            applyDataToCards(data)
        }
    })

}

function getWeatherIcon(index, data) {
    let img = data.list[index].weather[0].icon;
    return '<img alt="icon" src="https://openweathermap.org/img/w/'+ img +'.png">'
}

function getHumidity(index, data) {
    return data.list[index].main.humidity;
}

function getMaxTemp(index, data) {
    return Math.round(data.list[index].main.temp_max);
}

function getMinTemp(index, data) {
    return Math.round(data.list[index].main.temp_min);
}

function getDate(index, data) {
    return data.list[index].dt_txt;
}

function getDayFormatted(index, data) {
    return data.list[index].dt_txt.slice(5, 10);
}


