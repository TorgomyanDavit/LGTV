var backSlack = document.querySelector(".backSlack")
var notIcon = document.querySelectorAll(".notIcon")
var deletButton = document.querySelectorAll(".deletButton")
var notification = document.querySelector(".notification")
var notificationWidth = notification.offsetWidth;
var notichild = document.querySelectorAll(".notichild")
var notMessige = document.querySelectorAll(".notMessige ")
var innerScroll = document.querySelector(".innerScroll")

fetchNotification(sessionStorage.getItem("authenticated"))


var notArray = []

var callnotichild = function() {
    notichild = document.querySelectorAll(".clonedNote")
    for(var i2 = 0;i2 < notichild.length;i2++) {
        notArray[i2] = notichild[i2]
    }
}


var numberHoverNot = null
var numberDelete = null
var scrollTopBottom = 0
document.addEventListener("keydown",function(event) {
    // notification
    if(event.keyCode === 13 && numberHoverNot === -1) {
        var miniDivMenyu = document.querySelectorAll(".miniDivMenyu")
        notification.style.right = "-398px"
        miniDivMenyu[2].classList.remove("activeNoteforMenyu")
    }

    if(notification.style.right === ("0px")) {
        if(event.keyCode !== 13) {
            backSlack.classList.remove("backSlackHover")
            for(var i = 0;i < notArray.length;i++) {
                notArray[i].querySelector(".notIcon").classList.remove("scaleRing")
                notArray[i].querySelector(".deletButton").classList.remove("scaleIcon")
            }
        }

        if(numberHoverNot === null) {
            numberDelete = 0
            numberHoverNot = -1
        } else if(event.keyCode === 38 && numberHoverNot > -1) {
            numberHoverNot--
            if(numberHoverNot > 2) {
                scrollTopBottom -= 80
                innerScroll.style.top = (-scrollTopBottom + "px")
            }
        } else if(event.keyCode === 40 && numberHoverNot < notArray.length - 1) { 
            numberHoverNot++
            if(numberHoverNot > 3) {
                scrollTopBottom += 80
                innerScroll.style.top = (-scrollTopBottom + "px")
            }
        }  else if(event.keyCode === 37 && numberHoverNot > -1) {
            numberDelete = 0
        } else if(event.keyCode === 39 && numberHoverNot < notArray.length) { 
            numberDelete = 1
        } 
    
        if(numberHoverNot === -1 ) {
            backSlack.classList.add("backSlackHover")
        } 
      
        if(numberHoverNot !== -1 ) {
            // debugger
            notArray.forEach(function(val,i2) {
                if(i2 === numberHoverNot && numberDelete === 0) {
                    val.querySelector(".notIcon").classList.add("scaleRing")
                    return;
                } else if(i2 === numberHoverNot && numberDelete === 1) {
                    val.querySelector(".deletButton").classList.add("scaleIcon")
                    return;
                }
            })
        } 
        if(event.keyCode === 13 && numberDelete === 1) {
            notArray = notArray.filter(function(val,i2)  {
                if(i2 === numberHoverNot) {
                    deleteMessagePost(sessionStorage.getItem("authenticated"),val.data_src)
                    val.remove()
                    numberHoverNot = null
                } else {
                    return val
                }
            })

            if(notification.style.height === "100%" || notification.style.height === "" ) {
                notification.style.height = "100vh"
            } else {
                notification.style.height = "100%"
            }
        }

        // submit button Note
        var activeScaleRing = document.querySelector(".scaleRing")
        if(event.keyCode === 13 && activeScaleRing !== null && numberDelete === 0) {
            var showNotification = activeScaleRing.parentElement.nextElementSibling.classList.contains("showNot")
            for(var i = 0;i < notMessige.length;i++) {
                notMessige[i].classList.remove("showNot")
            }
            if(!showNotification) {
                activeScaleRing.parentElement.nextElementSibling.classList.add("showNot")
                if(notification.style.height === "100%" || notification.style.height === "" ) {
                    notification.style.height = "100vh"
                } else {
                    notification.style.height = "100%"
                }
            } else {
                if(notification.style.height === "100%" || notification.style.height === "" ) {
                    notification.style.height = "100vh"
                } else {
                    notification.style.height = "100%"
                }
                activeScaleRing.parentElement.nextElementSibling.classList.remove("showNot")
            }
        } 
    }
})



