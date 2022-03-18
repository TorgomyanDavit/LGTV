var clockTag = document.querySelector(".clock")
var calentdarTAg = document.querySelector(".calendar")
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var clock = new Date()
clockTag.innerHTML = clock.toLocaleTimeString()
calentdarTAg.innerHTML = days[clock.getDay()] + " "+clock.getUTCHours()+ "," + "" + clock.getFullYear()+""

setInterval(function() {
    var clock = new Date()
    clockTag.innerHTML = clock.toLocaleTimeString()
    calentdarTAg.innerHTML = days[clock.getDay()] + " " + clock.getUTCHours() + "," + "" + clock.getFullYear()+""
},1000)