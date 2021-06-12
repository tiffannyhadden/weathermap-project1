let coordinates = [29.423017, -98.48527];

fetchForecast(coordinates);

function applyDataToCards(data) {
    $("#day1").html(buildList(data, 0))
    $("#day2").html(buildList(data, 8))
    $("#day3").html(buildList(data, 16))
}

function buildList(data, index) {
    let output = "";

    output += "<p>" + "<strong> Date: </strong>" + getDate(index, data)+ "</p>";
    output += "<p>" + "<strong> Temp: </strong>" +  getMaxTemp(index, data) + "\xB0" + " / " + getMinTemp(index, data) +"\xB0"+ "</p>";
    output += "<p>" + "<strong> Humidity: </strong>" + getHumidity(index, data) + "</p>";
    output += "<p>" + getWeatherIcon(index, data) + "</p>";

    return output;
}

$(document).ready(function(){
    $("#oneViewBtn").click(function(){
        $('#card1').show();
        $('#card2').hide();
        $('#card3').hide();
    });
});

$(document).ready(function(){
    $("#twoViewBtn").click(function(){
        $('#card1').show();
        $('#card2').show();
        $('#card3').hide();
    });
});

$(document).ready(function(){
    $("#threeViewBtn").click(function(){
        $('#card1').show();
        $('#card2').show();
        $('#card3').show();
    });
});




