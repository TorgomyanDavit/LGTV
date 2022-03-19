var buttonCollection = document.querySelectorAll(".buttonRef")
var refresh = document.querySelector(".refresh")
var inputSearchList = document.querySelector(".inputSearchList")
var parentChild = document.querySelectorAll(".channelsChild")
var playlistMain = document.querySelectorAll(".playlistMain")
var backTo = document.querySelector(".backTo")
var playlistInput = document.querySelector(".playlistInput")
var refChannel = document.querySelector(".refChannel")
var TvChannelBlock = document.querySelector(".TvChannelBlock")
playlistInput.addEventListener("submit",function(e) {e.preventDefault()})
var iconDivMenu = document.querySelectorAll(".iconDivMenu")
var menyu = document.querySelector(".menyu")
var slackPosition = document.querySelectorAll(".slackPosition")
var video = document.getElementById('myVideo');
var videoconteiner = document.querySelector(".videoconteiner")
var childPlaylist = document.querySelector(".childPlaylist")
var source = document.getElementById('source');



parentChild[0].setAttribute("data-src", "http://fcf2e861.ucomist.net/iptv/CB5F2GMTR7SUDF/523/index.m3u8");
parentChild[1].setAttribute("data-src", "http://fcf2e861.ucomist.net/iptv/CB5F2GMTR7SUDF/11007/index.m3u8");
parentChild[2].setAttribute("data-src", "http://fcf2e861.ucomist.net/iptv/CB5F2GMTR7SUDF/2086/index.m3u8");







if(localStorage.getItem("booline") !== null) {
    back()
    userListKey = 1
    inputSearchList.classList.add("inputSearchHover")
    localStorage.removeItem("booline");
}

function back() {
    if(playlistInput.classList.contains("formPosition")) {
        playlistInput.classList.remove("formPosition")
        playlistInput[0].classList.remove("inputseracStyle")
        refChannel.style.display = "flex"
        TvChannelBlock.style.marginTop = "34px"
        playlistInput[0].blur()
        serachChannel()
    } else {
        playlistInput.classList.add("formPosition")
        playlistInput[0].classList.add("inputseracStyle")
        refChannel.style.display = "none"
        TvChannelBlock.style.marginTop = "107px"
        playlistInput[0].focus()
    }
}

function serachChannel() {
    for(var t = 0;t < TvChannelBlock.children.length;t++) {
        TvChannelBlock.children[t].style.display = "flex"
        var nameChannel = TvChannelBlock.children[t].children[1].innerText.toLowerCase()
        if(nameChannel.search(inputSearchList.value.toLowerCase())) {
            TvChannelBlock.children[t].style.display = "none"
        }
    }
}

var userListKey = null
var collectionKey = null
var scrollTopBottom = 0

document.addEventListener("keydown",function(event){
    if(event.keyCode ===  13 && userListKey === 1) {
        back()
    } else if(notification.style.right !== "0px" && videoconteiner.style.display !== "block") {

        if(event.keyCode !== 8  && !(inputSearchList.classList.contains("inputseracStyle"))) {
            refresh.classList.remove("hoverRefresh")
            inputSearchList.classList.remove("inputSearchHover")
            backTo.classList.remove("hoverRefresh")
        }
    
        for(var i = 0;i < buttonCollection.length;i++) {
            buttonCollection[i].classList.remove("hoverRefresh")
        }
    
        if(event.keyCode ===  13 && (userListKey === 3 || userListKey === 4 || userListKey === 5)) {
            for(var i = 0;i < buttonCollection.length;i++) {
                buttonCollection[i].classList.remove("activeButton")
            }
        }
    
        for(var j = 0;j < parentChild.length;j++) {
            if(j === collectionKey) {
                parentChild[j].classList.remove("channelsChildhover")
            }
        }
        if(userListKey === null ) {
            userListKey = 1
        } else if(event.keyCode === 37 && userListKey === 0 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = -1
        } else if(event.keyCode === 37 && userListKey === 2 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = -2
        } else if(event.keyCode === 37 && userListKey === 3 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = -3
        } else if((event.keyCode === 38 || event.keyCode === 37 ) && userListKey > 0 && userListKey !== 6 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey--
        } else if(event.keyCode === 39 && userListKey === -1 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = 0
        } else if(event.keyCode === 39 && userListKey === -2 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = 2
        } else if(event.keyCode === 39 && (userListKey === -3 || userListKey === -4)&& !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = 3
        } else if(event.keyCode === 38 && userListKey < -1 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey++
        } else if(event.keyCode === 40 && userListKey > -4 && userListKey <= -1 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey--
        } else if(event.keyCode === 39 && userListKey < 6 && userListKey >= 0 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey++
        } else if(event.keyCode === 40 && userListKey < 6 && userListKey > 2 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = 6
        } else if(event.keyCode === 40 && userListKey < 3 && userListKey > 0 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey++
        } else if(event.keyCode === 40 && userListKey === 0 && !(inputSearchList.classList.contains("inputseracStyle"))) {
            userListKey = 2
        } 
        
        for(var i4 =0;i4 < iconDivMenu.length;i4++) {
            iconDivMenu[i4].classList.remove("activeHover")
        }

        if(userListKey === -1) {
            iconDivMenu[0].classList.add("activeHover")
        } else if(userListKey === -2) {
            iconDivMenu[1].classList.add("activeHover")
        } else if(userListKey === -3) {
            iconDivMenu[2].classList.add("activeHover")
        } else if(userListKey === -4) {
            iconDivMenu[3].classList.add("activeHover")
        } else if(userListKey === 0) {
            refresh.classList.add("hoverRefresh")
        } else if(userListKey === 1) {
            inputSearchList.classList.add("inputSearchHover")
        } else if(userListKey === 2) {
            backTo.classList.add("hoverRefresh")
        } else if(userListKey === 3) {
            buttonCollection[0].classList.add("hoverRefresh")
        } else if(userListKey === 4) {
            buttonCollection[1].classList.add("hoverRefresh")
        } else if(userListKey === 5) {
            buttonCollection[2].classList.add("hoverRefresh")
        } else if(userListKey === 6 && collectionKey === null) {
            collectionKey = -1
        } 
       
        if(userListKey === 6 && collectionKey !== null) {
            if(event.keyCode === 37 && collectionKey === -1 ) {
                collectionKey = null
                userListKey--
                buttonCollection[2].classList.add("hoverRefresh")
            }  else if(event.keyCode === 37) {
                collectionKey --
            } else if(event.keyCode === 39 && collectionKey < parentChild.length - 1) {
                collectionKey++
            }
    
            if(event.keyCode === 40 && collectionKey === -1) {
                collectionKey++
            } else if(event.keyCode === 38 && collectionKey === 6) {
                buttonCollection[2].classList.add("hoverRefresh")
                userListKey = 4
                collectionKey = null
            }   else if(event.keyCode === 40 && collectionKey < parentChild.length - 7) {
                // scroll channel
                if(collectionKey >= 7) {
                    scrollTopBottom -= 180
                    TvChannelBlock.style.top = (scrollTopBottom + "px")
                }
                collectionKey += 7
            } else if(event.keyCode === 38 && collectionKey > 6) {
                // scroll channel
                if(collectionKey > 13) {
                    scrollTopBottom += 180
                    TvChannelBlock.style.top = (scrollTopBottom + "px")
                }
                collectionKey -= 7
            } else if(event.keyCode === 38 && collectionKey < 6) {
                buttonCollection[2].classList.add("hoverRefresh")
                userListKey = 4
                collectionKey = null
            } 
        }
    
        if(collectionKey !== null && userListKey === 6) {
            for(var l = 0;l < parentChild.length;l++) {
                if(l === collectionKey) {
                    parentChild[l].classList.add("channelsChildhover")
                }
            }
        }

        if(event.keyCode === 13 && userListKey === -1) {
            if(menyu.classList.contains("transformLeftMenyu")) {
                for(var i1 =0;i1 < slackPosition;i1++) {
                    slackPosition[i1].classList.remove("slackMenyu")
                }
                menyu.classList.remove("transformLeftMenyu")
                iconDivMenu[0].firstElementChild.classList.add("svg1")
                iconDivMenu[0].lastElementChild.classList.remove("svg1")
            } else {
                for(var i1 =0;i1 < slackPosition;i1++) {
                    slackPosition[i1].classList.add("slackMenyu")
                }
                menyu.classList.add("transformLeftMenyu")
                iconDivMenu[0].firstElementChild.classList.remove("svg1")
                iconDivMenu[0].lastElementChild.classList.add("svg1")
            }
        } else if(event.keyCode === 13 && userListKey === -3) {
            var miniDivMenyu = document.querySelectorAll(".miniDivMenyu")
            notification.style.right = "0px"
            miniDivMenyu[2].classList.add("activeNoteforMenyu")
            userListKey = - 2
        } else if(event.keyCode === 13 && userListKey === -4) {
            window.location.href = "../settings/settings.html";
        } else if(event.keyCode ===  13 && userListKey === 0) {
            location.reload();
        } else if(event.keyCode ===  13 && userListKey === 2) {
            window.location.href = "../channelMainPage/channelMainPage.html";
        } else if(event.keyCode ===  13 && userListKey === 3) {
            buttonCollection[0].classList.add("activeButton")
        } else if(event.keyCode ===  13 && userListKey === 4) {
            buttonCollection[1].classList.add("activeButton")
        } else if(event.keyCode ===  13 && userListKey === 5) {
            buttonCollection[2].classList.add("activeButton")
        } 

        // player click
        if(event.keyCode ===  13 && collectionKey !== null && userListKey === 6) {
            localStorage.setItem('pathName', "true");
            childPlaylist.style.display = "none"
            menyu.style.display = "none"
            notification.style.display = "none"
            videoconteiner.style.display = "block"
            for(var i5 = 0;i5 < parentChild.length;i5++) {
                if(i5 === collectionKey) {
                    videojs("myVideo").src({type: "application/x-mpegURL", src: parentChild[i5].getAttribute("data-src")})
                    videojs("myVideo").play()
                }
            }
        }
    }
})


