var link = document.querySelectorAll(".linkRegSign")


var numberofElement = null
document.addEventListener("keydown",function(event) {
    for(var i = 0;i < link.length;i++) {
        link[i].classList.remove("hoverLink")
    }

    if(numberofElement === null) {
        numberofElement = 0
    } else if((event.keyCode === 38  || event.keyCode === 37) && numberofElement > 0) {
        numberofElement--
    } else if((event.keyCode === 40  || event.keyCode === 39) && numberofElement < 1) {
        numberofElement++
    } else if(event.keyCode !== 13){
        numberofElement = null
    } 

    if(numberofElement === 0) {
        link[0].classList.add("hoverLink")
    } else if( numberofElement === 1) {
        link[1].classList.add("hoverLink")
    } 

    if(event.keyCode === 13 && numberofElement === 0) {
        window.location.href = "./register.html";
    } else if(event.keyCode === 13 && numberofElement === 1) {
        window.location.href = "../signInPage/signIn.html";
    } 
})