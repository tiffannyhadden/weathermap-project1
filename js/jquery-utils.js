const coordinates = [29.423017, -98.48527];

startApp();

function startApp() {
    fetchForecast(coordinates);
    cardView();
}

function applyDataToCards(data, view) {
        $(".day1").html(buildList(data, 0))
        $(".day2").html(buildList(data, 8))
        $(".day3").html(buildList(data, 16))
        $(".day4").html(buildList(data, 24))
        $(".day5").html(buildList(data, 32))
}

function buildList(data, index) {
    let output = "";
    let date = new Date(getDate(index,data))
    output += "<h4>" + returnDay(date.getDay()) + " " + getDayFormatted(index, data) + "</h4>";
    output += "<p>" + "<strong> Temp: </strong>" +  getMaxTemp(index, data) + "\xB0" + " / " + getMinTemp(index, data) +"\xB0"+ "</p>";
    output += "<p>" + "<strong> Humidity: </strong>" + getHumidity(index, data) + "</p>";
    output += "<p>" + getWeatherIcon(index, data) + "</p>";

    return output;
}

function listView() {
    $('#cards').hide();
    $('#list').show();
}

function cardView() {
    $('#cards').show();
    $('#list').hide();
    fiveView();
}

function fiveView() {
    $('#card1').show();
    $('#card2').show();
    $('#card3').show();
    $('#card4').show();
    $('#card5').show();
}

function returnDay(day) {
    if(day === 0) {
        return "Sunday";
    } else if(day === 1 ) {
        return "Monday";
    } else if(day === 2) {
        return "Tuesday";
    } else if(day === 3) {
        return "Wednesday";
    } else if(day === 4) {
        return "Thursday";
    } else if(day === 5) {
        return "Friday";
    } else {
        return "Saturday";
    }
}

$(document).ready(function(){
    $("#listView").click(function() {
        listView();
    })
})

$(document).ready(function(){
    $("#cardView").click(function() {
       cardView();
    })
})

$(document).ready(function(){
    $("#oneViewBtn").click(function(){
        $('#card1').show();
        $('#card2').hide();
        $('#card3').hide();
        $('#card4').hide();
        $('#card5').hide();
    });
});

$(document).ready(function(){
    $("#threeViewBtn").click(function(){
        $('#card1').show();
        $('#card2').show();
        $('#card3').show();
        $('#card4').hide();
        $('#card5').hide();
    });
});

$(document).ready(function(){
    $("#fiveViewBtn").click(function(){
        fiveView();
    });
});




