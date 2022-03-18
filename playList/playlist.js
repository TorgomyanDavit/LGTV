var calentdarTAg = document.querySelector(".calendar")
var clockTag = document.querySelector(".clock")

// time js
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var clock = new Date()
clockTag.innerHTML = clock.toLocaleTimeString()
calentdarTAg.innerHTML = days[clock.getDay()] + " "+clock.getUTCHours()+"," + "" + clock.getFullYear() + ""
setInterval(function() {
    var clock = new Date()
    clockTag.innerHTML = clock.toLocaleTimeString()
    calentdarTAg.innerHTML = days[clock.getDay()] + " " + clock.getUTCHours() + "," + "" + clock.getFullYear() + ""
},1000)

// color Js

// var colorDiv = document.querySelectorAll(".color")
// var ActiveColor = document.querySelector(".ActiveColor")
// ActiveColor.style.setProperty("--check-secondary", "green")
// for(let i = 0;i < colorDiv.length;i++) {
//     colorDiv[i].addEventListener("click",function()  {
//     var active = document.querySelector(".ActiveColor")
//     active.classList.remove("ActiveColor")
//     colorDiv[i].classList.add("ActiveColor")
//     var bcolor = window.getComputedStyle(colorDiv[i]).getPropertyValue("background-color");
//     colorDiv[i].style.setProperty("--check-secondary", bcolor)
//     })
// }

// var iconDiv = document.querySelector(".chooseIcon")
// for(let i2 = 0;i2 < iconDiv.children.length;i2++) {
//     iconDiv.children[i2].addEventListener("click",function() {
//     var selectedIcon = document.querySelector(".selectedIcon")
//     selectedIcon.classList.remove("selectedIcon")
//     iconDiv.children[i2].classList.add("selectedIcon")
//     })
// }

















