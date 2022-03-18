var button1 = document.querySelectorAll(".button1")

button1[0].onclick = function() {
    var colorButton = document.querySelector(".colorButton")
    var activeButton = document.querySelector(".activeButton")
    activeButton.classList.remove("activeButton")
    this.classList.add("activeButton")
    if(this.classList.contains("buttonTwo")) {
        colorButton.classList.add("activeColorButton")
    } else {
        colorButton.classList.remove("activeColorButton")
    }
}
    
button1[1].onclick = function() {
    var colorButton = document.querySelector(".colorButton")
    var activeButton = document.querySelector(".activeButton")
    activeButton.classList.remove("activeButton")
    this.classList.add("activeButton")
    if(this.classList.contains("buttonTwo")) {
        colorButton.classList.add("activeColorButton")
    } else {
        colorButton.classList.remove("activeColorButton")
    }
}

var Xbutton = document.querySelector(".Xbutton")
var chooseField = document.querySelector(".chooseField")
Xbutton.addEventListener("click",function() {
    if(button1[0].classList.contains("activeButton")) {
        chooseField.style.display = "none"
    } else {
        window.location.href = "../userPage/user.html"
    }
})

$(document).ready(function(){
   $('.channels').slick({
       infinite: false,
       slidesToShow: 8,
       slidesToScroll: 1,
       variableWidth:true,
       draggable: false,
       accesibility: true,
       centerPadding: '60px',
   });
});






















