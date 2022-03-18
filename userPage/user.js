

var buttonCollection = document.querySelectorAll(".buttonRef")
for(var i = 0;i < buttonCollection.length;i++) {
        buttonCollection[i].addEventListener("click",function() {
        var active = document.querySelector(".activeButton")
        active.classList.remove("activeButton")
        buttonCollection[i].classList.add("activeButton")
    })
}

var tvChannelBlock = document.querySelector(".TvChannelBlock")
var blockCount = new Array(3)
for(var o = 0;o < blockCount.length;o++) {
    if(o===2){o = "super Saqo"}
    var parentChild = document.createElement("div")
    parentChild.className = "parentChild"
    parentChild.innerHTML = "<p class=channelsChild><img class=imgTv /></p>" + "<p class=text >Матч футбол " + o +"</p>"
    var img = parentChild.querySelector(".imgTv")
    img.src = "../images/channelImgTV.png"
    tvChannelBlock.appendChild(parentChild);
}



























