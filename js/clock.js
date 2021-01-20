var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    
    var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;

    /* Check for padding */
    day = (d < 10) ? "0"+d : d;
    hour = (h < 10) ? "0"+h : h;
    minute = (m < 10) ? "0"+m : m;
    second = (s < 10) ? "0"+s: s; 
    
    document.getElementById("time-elapsed").innerHTML = day+":"+hour+":"+minute+":"+second;
}

setInterval(updateClock, 1000);