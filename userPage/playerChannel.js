var videoconteiner = document.querySelector(".videoconteiner")
var backButton = document.querySelector(".backButton")
var play = document.querySelector(".play")
var next = document.querySelector(".next")
var channel = document.querySelector(".prev")
var sourceButton = document.querySelector(".sourceButton")
var slack = document.querySelectorAll(".slack")
var mainPageSizerDiv = document.querySelector(".mainPageSizerDiv");









var keyPlayer = null
var channelType = 0
document.addEventListener("keydown",function(event) {
    // channel.innerHTML = event.keyCode
    if(videoconteiner.style.display === "block") {
        for(var i = 0;i < slack.length;i++) {
            backButton.classList.remove("backButtonHover")
            slack[i].classList.remove("hoverSlack")
        }
        if(keyPlayer === null) {
            keyPlayer = 0
        } else if((event.keyCode === 37 || event.keyCode === 38) && keyPlayer > 1) {
            keyPlayer--
        } else if((event.keyCode === 39 || event.keyCode === 40) && keyPlayer < 4) {
            keyPlayer++
        }  


        if(keyPlayer === 1) {
            backButton.classList.add("backButtonHover")
        } else if(keyPlayer === 2) {
            slack[0].classList.add("hoverSlack")
        } else if(keyPlayer === 3) {
            slack[1].classList.add("hoverSlack")
        } else if(keyPlayer === 4) {
            slack[2].classList.add("hoverSlack")
        } 
         
        // if(event.keyCode === 461) {
        //     window.location.href = "../userPage/user.html"
        // }


        // debugger

        if(event.keyCode ===  13 && keyPlayer === 1 && localStorage.getItem('pathName') === "true") {
            video.pause()
            childPlaylist.style.display = "block"
            menyu.style.display = "block"
            notification.style.display = "block"
            videoconteiner.style.display = "none"
            keyPlayer = 0
            localStorage.removeItem('pathName');
        } else if(event.keyCode ===  13 && keyPlayer === 1 && localStorage.getItem('pathName') !== "true") {
            video.pause()
            mainPageSizerDiv.style.display = "block"
            menyu.style.display = "block"
            notification.style.display = "block"
            videoconteiner.style.display = "none"
            keyPlayer = 0
        } else if(event.keyCode === 13 && keyPlayer === 2) {
            if(channelType > 0) {
                channelType--
            }
            for(var i5 = 0;i5 < parentChild.length;i5++) {
                if(i5 === channelType) {
                    video.src = parentChild[i5].getAttribute("data-src")
                    video.play()
                }
            }
        } else if(event.keyCode ===  13 && keyPlayer === 3) {
            if(video.paused) {
                play.children[1].style.display = "block"
                play.children[0].style.display = "none"
                video.play()
            } else {
                play.children[0].style.display = "block"
                play.children[1].style.display = "none"
                video.pause()
            }
        } else if(event.keyCode ===  13 && keyPlayer === 4) {
            if(channelType < parentChild.length - 1) {
                channelType++
            }
            for(var i5 = 0;i5 < parentChild.length;i5++) {
                if(i5 === channelType) {
                    video.src = parentChild[i5].getAttribute("data-src")
                    video.play()
                }
            }
        }

        video.onended = function() {
            alert("The audio has ended");
        };
        // console.log(event.keyCode);
    }
    
})
