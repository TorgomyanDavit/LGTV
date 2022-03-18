// var calentdarTAg = document.querySelector(".calendar")
// var clockTag = document.querySelector(".clock")
var forgetPassword = document.querySelector(".forgetPassword")

forgetPassword.addEventListener("submit",function(e)  {
    e.preventDefault()
    // letterReceive.style.display = "flex"
    // formChild.style.display = "none"
})

var formChild = document.querySelector(".formChild")
var confirmButton = document.querySelector(".confirmButton")
var changingInput = document.querySelector(".changingInput")
var inputSearch = document.querySelector(".inputSearch")
var goBAckSlack = document.querySelector(".goBAckSlack")
var letterReceive = document.querySelector(".letterReceive")


var numberOfKey = null
document.addEventListener("keydown",function(event) {
    inputSearch.classList.remove("inputSearchHover")
    changingInput.classList.remove("inputSearchHover")
    confirmButton.classList.remove("hoverLinkForButton")
    if(numberOfKey !== 3) {
        if(numberOfKey === null) {
            numberOfKey = 1
        } else if((event.keyCode === 37 || event.keyCode === 38) && numberOfKey > 0) {
            numberOfKey--
        } else if((event.keyCode === 39  || event.keyCode === 40) && numberOfKey < 2) {
            numberOfKey++
        } 
    }
    
    if(numberOfKey === 0 ) {
        inputSearch.classList.add("inputSearchHover")
    } else if(numberOfKey === 1) {
        changingInput.classList.add("inputSearchHover")
    } else if(numberOfKey === 2) {
        confirmButton.classList.add("hoverLinkForButton")
    }

    if(event.keyCode !== 8 && event.keyCode !== 13 ) {
        changingInput.blur()
    }

    if(event.keyCode === 13 && numberOfKey === 0) {
        window.location.href = "../userPage/user.html";
    } else if(event.keyCode === 13 && numberOfKey === 1) {
        if("BODY" === document.activeElement.tagName) {
            changingInput.focus()
        } else {
            changingInput.blur()
        }
    } else if(event.keyCode === 13 && numberOfKey === 2) {
        formChild.style.display = "none"
        letterReceive.style.display = "flex"
        goBAckSlack.classList.add("hoverRefresh")
        numberOfKey = 3
    } else if(event.keyCode === 13 && numberOfKey === 3) {
        window.location.href = "../forgetPassword/newPassword.html";
    }
})




