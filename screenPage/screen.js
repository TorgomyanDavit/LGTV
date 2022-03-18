
var inputSearchList = document.querySelector(".inputSearchList")
var backTo = document.querySelector(".backTo")
var div = document.querySelectorAll(".div")
var notification = document.querySelector(".notification")
var iconDivMenu = document.querySelectorAll(".iconDivMenu")
var slackPosition = document.querySelectorAll(".slackPosition")
var menyu = document.querySelector(".menyu")
var notification = document.querySelector(".notification")



var numberHover = 0
var numberHoverScreen = null
document.addEventListener("keydown",function(event) {
    if(notification.style.right !== "0px") {
        if(numberHover === -5) {
            numberHover = -2
        }
        inputSearchList.classList.remove("inputSearchHover")
        backTo.classList.remove("hoverRefresh")
        for(var l = 0;l < div.length;l++) {
            div[l].classList.remove("channelsChildhover")
        }
        if(event.keyCode === 37 && numberHover === 0) {
            numberHover = -1
        } else if(event.keyCode === 39 && numberHover < 0) {
            numberHover = 0
        } else if(event.keyCode === 40 && numberHover < 0 && numberHover > -4) {
            numberHover--
        } else if(event.keyCode === 38 && numberHover < -1) {
            numberHover++
        } else if((event.keyCode === 37) && numberHover === 1) {
            numberHover = -1
        }  else if((event.keyCode === 38) && numberHover > 0 && numberHover < 2) {
            numberHover--
        } else if((event.keyCode === 37) && numberHover === 0) {
            numberHover = -1
        } else if((event.keyCode === 40) && numberHover >= 0 && numberHover < 2) {
            numberHover++
        }  

        for(var l = 0;l < iconDivMenu.length;l++) {
            iconDivMenu[l].classList.remove("activeHover")
        }

        if((event.keyCode === 37 || event.keyCode === 38) && numberHover > 1 && numberHoverScreen === 0) {
            numberHover = 1
            numberHoverScreen = null
        } else if(event.keyCode === 37 && numberHover === 2 && numberHoverScreen > 0) {
            numberHoverScreen--
        } else if(event.keyCode === 37 && numberHover === 2 && numberHoverScreen === 0) {
            numberHoverScreen = null
            numberHover = -1
        } else if(event.keyCode === 39 && numberHover === 2 && numberHoverScreen < div.length - 1) {
            numberHoverScreen++
        } else if(event.keyCode === 38 && numberHover === 2 && numberHoverScreen > 2) {
            numberHoverScreen -= 3
        } else if(event.keyCode === 40 && numberHover === 2 && numberHoverScreen === null) {
            numberHoverScreen = 0
        } else if(event.keyCode === 40 && numberHover === 2 && numberHoverScreen <= 2) {
            numberHoverScreen += 3
        }

        if(numberHover === -1) {
            iconDivMenu[0].classList.add("activeHover")
        } else if(numberHover === -2) {
            iconDivMenu[1].classList.add("activeHover")
        } else if(numberHover === -3) {
            iconDivMenu[2].classList.add("activeHover")
        } else if(numberHover === -4) {
            iconDivMenu[3].classList.add("activeHover")
        } else if(numberHover === 0) {
            inputSearchList.classList.add("inputSearchHover")
        } else if(numberHover === 1) {
            backTo.classList.add("hoverRefresh")
        } else if(numberHover === 2) {
            for(var l = 0;l < div.length;l++) {
                if(l === numberHoverScreen) {
                    div[l].classList.add("channelsChildhover")
                }
            }
        } 
        
        // enter to add move
        if(event.keyCode === 13 && numberHover === -1) {
            if(menyu.classList.contains("transformLeftMenyu")) {
                for(var l = 0;l < slackPosition.length;l++) {
                    slackPosition[l].classList.remove("slackMenyu")
                }
                menyu.classList.remove("transformLeftMenyu")
                iconDivMenu[0].firstElementChild.classList.add("svg1")
                iconDivMenu[0].lastElementChild.classList.remove("svg1")
            } else {
                for(var l = 0;l < slackPosition.length;l++) {
                    slackPosition[l].classList.add("slackMenyu")
                }
                menyu.classList.add("transformLeftMenyu")
                iconDivMenu[0].firstElementChild.classList.remove("svg1")
                iconDivMenu[0].lastElementChild.classList.add("svg1")
            }
        } else if(event.keyCode === 13 && numberHover === -3) {
            var miniDivMenyu = document.querySelectorAll(".miniDivMenyu")
            notification.style.right = "0px"
            miniDivMenyu[2].classList.add("activeNoteforMenyu")
            numberHover= -5
        } else if(event.keyCode === 13 && numberHover === 0) {
            localStorage.setItem("booline", true);
            window.location.href = "../userPage/user.html";
        } else if(event.keyCode === 13 && numberHover === 1) {
            window.location.href = "../channelMainPage/channelMainPage.html";
        }  else if(event.keyCode === 13 && numberHover === -4) {
            window.location.href = "../settings/settings.html";
        } 
    }
})  



