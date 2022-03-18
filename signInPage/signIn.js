var Link = document.querySelectorAll(".linkRegSign")
var form = document.querySelector(".formSignIn")
var input = document.querySelectorAll(".passwordInpur")
var forgetPassword = document.querySelector(".forgetPassword")
var signInMainButton = document.querySelector(".signInMainButton")



form.addEventListener("submit",function(e) {
    e.preventDefault()
}) 

// for ok button keycode 13
// 37 left,38 arrowup,39 right,40 arrowdown
var numberOfKey = null
document.addEventListener("keydown",function(event) {
    // close open element
    if(event.keyCode !== 8 ) {
        Link[0].classList.remove("hoverLink")
        Link[1].classList.remove("hoverLink")
        forgetPassword.classList.remove("hoverLink")
        signInMainButton.classList.remove("hoverLinkForButton")
        input[0].classList.remove("hoverInput")
        input[1].classList.remove("hoverInput")
    }
     
    // add key for any element
    if(numberOfKey === null) {
        numberOfKey = 3
    } else if((event.keyCode === 38 || event.keyCode === 37) && numberOfKey > 1) {
        numberOfKey--
    } else if((event.keyCode === 40  || event.keyCode === 39) && numberOfKey < 6) {
        numberOfKey++
    } else if(event.keyCode === 37 || event.keyCode === 39) {
        numberOfKey = null
    } 

    // hover thing
    if(numberOfKey === 3) {
        input[0].classList.add("hoverInput")
    } else if(numberOfKey === 1) {
        Link[0].classList.add("hoverLink")
    } else if(numberOfKey === 2) {
        Link[1].classList.add("hoverLink")
    } else if(numberOfKey === 4) {
        input[1].classList.add("hoverInput")
    } else if(numberOfKey === 5) {
        forgetPassword.classList.add("hoverLink")
    } else if(numberOfKey === 6) {
        signInMainButton.classList.add("hoverLinkForButton")
    } 

    if(event.keyCode !== 8 && event.keyCode !== 13 ) {
        for(var i = 0;i < input.length;i++) {
            input[i].blur() 
        }
    }
    // click to thing
    if(event.keyCode === 13 && numberOfKey === 1) {
        window.location.href = "../registerPage/register.html";
    } else if(event.keyCode === 13 && numberOfKey === 2) {
        window.location.href = "./signIn.html";
    } else if(event.keyCode === 13 && numberOfKey === 3) {
        if ("INPUT" === document.activeElement.tagName) { input[0].blur() } else { input[0].focus()}
    } else if(event.keyCode === 13 && numberOfKey === 4) {
        if ("INPUT" === document.activeElement.tagName) { input[1].blur() } else {  input[1].focus() }
    } else if(event.keyCode === 13 && numberOfKey === 5) {
        window.location.href = "../forgetPassword/forget.html";
    } else if(event.keyCode === 13 && numberOfKey === 6) {
        localStorage.setItem("openPopup",true)
        window.location.href = "../channelMainPage/channelMainPage.html";
    }
})








