
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


// playlist code
var formForColor = document.querySelector(".formForColor")
if(formForColor) {
    formForColor.addEventListener("submit",function(event) {    
        event.preventDefault()
        var addColor = document.querySelector(".ActiveColor")
        var ColorForElem = window.getComputedStyle(addColor).getPropertyValue("background-color")
        var iconSrc = document.querySelector(".selectedIcon")
        var MainInput = document.querySelector(".input")
        var value = MainInput.value
        var addingContent = document.querySelector(".adding-Content")
        var descriptionDiv = document.querySelector(".descriptionDiv")
        addingContent.firstElementChild.style.backgroundColor = ColorForElem
        addingContent.firstElementChild.firstElementChild.src = iconSrc.firstChild.src.replace("png","svg").replace("small", "")
        descriptionDiv.firstElementChild.innerHTML = value
        localStorage.setItem(""+ Math.random()+"",addingContent.innerHTML)
        MainInput.value = ""
    })
}