function buildList(data) { // juery

    let output = "";
    output += "<p>" + "<strong> Date: </strong>" + "</p>" + data.list[0].dt_txt;
    output += "<p>" + "<strong> Temp: </strong>" +  Math.round(data.list[0].main.temp_max) + "\xB0" + " / " + Math.round(data.list[0].main.temp_min) +"\xB0"+ "</p>";
    output += "<p>" + "<strong> Humidity: </strong>" + data.list[0].main.humidity;
    return output;
}

// $('#weather').html(buildList(data)); // jquery
// });
// }