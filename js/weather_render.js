var source   = document.getElementById("current-template").innerHTML;
var template = Handlebars.compile(source);
var output = template(weather_context);
document.getElementById("current-weather").innerHTML = output;

var sourcef   = document.getElementById("future-template").innerHTML;
var templatef = Handlebars.compile(sourcef);
var contextf = {time: "5pm (EDT)", future_icons: "An icon goes here", future_condition: "Partly Cloudy with an 80% chance of tweets"};
var outputf = templatef(future_context);
document.getElementById("future-weather").innerHTML = outputf;