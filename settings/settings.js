
var form = document.querySelector(".settingUser");
var languigDiv = document.querySelectorAll(".languigDiv");
var clickLanguig = document.querySelector(".clickLanguig");
var editSvg = document.querySelectorAll(".editSvg");
form.addEventListener("submit",function(e) {e.preventDefault()});
var notification = document.querySelector(".notification");
var iconDivMenu = document.querySelectorAll(".iconDivMenu");
var inputSearchList = document.querySelector(".inputSearchList");
var slackLanguig = document.querySelectorAll(".slackLanguig");
var menyu = document.querySelector(".menyu");
var slackPosition = document.querySelectorAll(".slackPosition");

form.addEventListener("submit",function(e) {
    e.preventDefault()
})

updateUserPage(sessionStorage.getItem("authenticated"),updatePassword);


var userListKey = null
var collectionKey = null
document.addEventListener("keydown",function(event) {
    if(notification.style.right !== "0px") {
        if(event.keyCode !== 8) {
            for(var i = 0;i < editSvg.length;i++) {
                editSvg[i].classList.remove("editStyleHover")
            }
            inputSearchList.classList.remove("inputSearchHover")
            clickLanguig.classList.remove("signInMainButtonhover")
            slackLanguig[0].classList.remove("editStyleHover")
            slackLanguig[1].classList.remove("editStyleHover")
            editSvg[2].parentElement.querySelector(".userinputValue").type = "password"

        }
    
        for(var i = 0;i < iconDivMenu.length;i++) {
            iconDivMenu[i].classList.remove("activeHover")
        }



        var channelsChildhover = document.querySelector(".channelsChildhover");
        if(userListKey === null && channelsChildhover === null) {
            userListKey = 0
        } else if(event.keyCode === 37 && userListKey === 0 && collectionKey === null) {
            userListKey = -1
        } else if(event.keyCode === 37 && userListKey > 0 && userListKey < 4  && collectionKey === null) {
            userListKey = -2
        } else if(event.keyCode === 37 && userListKey > 3 && collectionKey === null) {
            userListKey = -4
        } else if(event.keyCode === 38 && userListKey >= 0 && collectionKey === null) {
            userListKey--
        } else if(event.keyCode === 38 && userListKey < 0  && collectionKey === null) {
            userListKey++
        } else if(event.keyCode === 40 && userListKey > -5 && userListKey < 0 && collectionKey === null) {
            userListKey--
        } else if(event.keyCode === 40 && userListKey >= 0 && userListKey < 5 && collectionKey === null) {
            userListKey++
        } else if(event.keyCode === 39 && userListKey === -1 && collectionKey === null) {
            userListKey = 0
        } else if(event.keyCode === 39 && userListKey < -1 && collectionKey === null) {
            userListKey = 1
        } else if(collectionKey !== null) {
            if(event.keyCode === 40 && collectionKey === 0) {
                collectionKey = 1 
            } else if(event.keyCode === 38 && collectionKey === 1) {
                collectionKey = 0
            }
        } 

        if(event.keyCode !== 8 && event.keyCode !== 13 ) {
            for(var i = 0;i < editSvg.length;i++) {
                editSvg[i].parentElement.querySelector(".userinputValue").blur() 
            }
        }

        if(userListKey === -1) {
            iconDivMenu[0].classList.add("activeHover")
        } else if(userListKey === -2) {
            iconDivMenu[1].classList.add("activeHover")
        } else if(userListKey === -3) {
            iconDivMenu[2].classList.add("activeHover")
        } else if(userListKey === -4) {
            iconDivMenu[3].classList.add("activeHover")
        }  else if(userListKey === -5) {
            // debugger
            iconDivMenu[4].classList.add("activeHover")
        } else if(userListKey === 0) {
            inputSearchList.classList.add("inputSearchHover")
        } else if(userListKey === 1) {
            editSvg[0].classList.add("editStyleHover")
        } else if(userListKey === 2) {
            editSvg[1].classList.add("editStyleHover")
        } else if(userListKey === 3) {
            editSvg[2].classList.add("editStyleHover")
        } 
        // else if(userListKey === 4) {
        //     if(languigDiv[0].classList.contains("addingLanguig")) {
        //         slackLanguig[1].classList.remove("editStyleHover")
        //         slackLanguig[0].classList.add("editStyleHover")
        //     } else {
        //         slackLanguig[0].classList.remove("editStyleHover")
        //         slackLanguig[1].classList.add("editStyleHover")
        //     }
        // } 
        else if(userListKey === 4) {
            clickLanguig.classList.add("signInMainButtonhover")
        }




        if(event.keyCode === 13 && userListKey === -1) {
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
        } else if(event.keyCode === 13 && userListKey === -2) {
            window.location.href = "../channelMainPage/channelMainPage.html";
        } else if(event.keyCode === 13 && userListKey === -3) {
            var miniDivMenyu = document.querySelectorAll(".miniDivMenyu")
            notification.style.right = "0px"
            miniDivMenyu[2].classList.add("activeNoteforMenyu")
            userListKey = -6
        } else if(event.keyCode === 13 && userListKey === -5) {
            // debugger
            logauth(sessionStorage.getItem("authenticated"))
        } 


        else if(userListKey === 0 && event.keyCode === 13) {
            localStorage.setItem("booline", true);
            window.location.href = "../userPage/user.html";
        } else if(userListKey === 1 && event.keyCode === 13) {
            if ("INPUT" === document.activeElement.tagName) { 
                editSvg[0].parentElement.querySelector(".userinputValue").blur() 
            } else {
                editSvg[0].parentElement.querySelector(".userinputValue").focus() 
            }
        } else if(userListKey === 2 && event.keyCode === 13) {
            if ("INPUT" === document.activeElement.tagName) { 
                editSvg[1].parentElement.querySelector(".userinputValue").blur() 
            } else {
                editSvg[1].parentElement.querySelector(".userinputValue").focus() 
            }
        } else if(userListKey === 3 && event.keyCode === 13) {
            if ("INPUT" === document.activeElement.tagName) {
                editSvg[2].parentElement.querySelector(".userinputValue").blur() 
            } else {
                editSvg[2].parentElement.querySelector(".userinputValue").focus() 
                editSvg[2].parentElement.querySelector(".userinputValue").type = "text"

            }
        } else if(userListKey === 4 && event.keyCode === 13 && collectionKey === null) {
            // debugger
            updateUserDate(
                {
                    username:form[0].value,
                    email:form[1].value,
                    password:form[2].value,
                    id:sessionStorage.getItem("ID")
                },
                sessionStorage.getItem("authenticated"),
                sessionStorage.getItem("ID")
            );
            // updateUserPage(sessionStorage.getItem("authenticated"),updatePassword);
        }
        



        // Languig function
        // else if(userListKey === 4 && event.keyCode === 13 && collectionKey === null) {
        //     collectionKey = 0
        //     languigDiv[1].classList.add("addingLanguig")
        //     languigDiv[0].classList.add("addingLanguig")
        // } else if(userListKey === 4 && event.keyCode === 13 && collectionKey === 0) {
        //     collectionKey = null
        //     languigDiv[1].classList.remove("addingLanguig")
        //     languigDiv[0].classList.remove("channelsChildhover")
        // } else if(userListKey === 4 && event.keyCode === 13 && collectionKey === 1) {
        //     collectionKey = null
        //     languigDiv[0].classList.remove("addingLanguig")
        //     languigDiv[1].classList.remove("channelsChildhover")
        // }
    

        // if(collectionKey === 0) {
        //     languigDiv[1].classList.remove("channelsChildhover")
        //     languigDiv[0].classList.add("channelsChildhover")
        //     slackLanguig[1].classList.remove("editStyleHover")
        //     slackLanguig[0].classList.add("editStyleHover")
        // } else if(collectionKey === 1) {
        //     languigDiv[0].classList.remove("channelsChildhover")
        //     languigDiv[1].classList.add("channelsChildhover")
        //     slackLanguig[0].classList.remove("editStyleHover")
        //     slackLanguig[1].classList.add("editStyleHover")
        // }

    }
})













