var buttonCollection = document.querySelectorAll(".buttonRef")
for(var i = 0;i < buttonCollection.length;i++) {
        buttonCollection[i].addEventListener("click",function() {
        var active = document.querySelector(".activeButton")
        active.classList.remove("activeButton")
        buttonCollection[i].classList.add("activeButton")
    })
}

var tvChannelBlock = document.querySelector(".TvChannelBlock")
var blockCount = new Array(2)
for(var o = 0;o < blockCount.length;o++) {
    var parentChild = document.createElement("div")
    parentChild.className = "parentChild"
    parentChild.innerHTML = "<p class=channelsChild><img class=imgTv /></p>" + "<p class=text >Матч футбол " + o +"</p>"
    var img = parentChild.querySelector(".imgTv")
    img.src = "../images/channelImgTV.png"
    tvChannelBlock.appendChild(parentChild);
}




















// JavaScript code

// var options = {};
// options.mediaTransportType = "WIDEVINE";
// options.option = {};
// options.option.drm = {};
// options.option.drm.type = "playready";
// options.option.transmission = {};
// options.option.transmission.playTime = {};
// options.option.transmission.playTime.start = 100;
// var mediaOption = encodeURI(JSON.stringify(options));
// var source = document.getElementById('source');
// source.setAttribute('type', 'video/mp4;mediaOption=' + mediaOption);




