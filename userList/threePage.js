// window.onload = function() {
//     var parentPage = document.querySelector(".mainPlayList")
//     var i = 0;
//     if(i < localStorage.length) {
//         while(i < localStorage.length) {
//             var getItem = localStorage.getItem(localStorage.key(i))
//             var Div = document.createElement("div")
//             Div.setAttribute("class","listForPlayList")
//             Div.innerHTML = getItem
//             var boxShadowDiv = Div.querySelector(".imgIconForPlaylist")
//             var BackGroundColor = boxShadowDiv.style.backgroundColor
//             boxShadowDiv.style.boxShadow = "2px 6px 13px " +BackGroundColor+"" 
//             parentPage.append(Div)    
//             i++
//         }
//         var pageClient = document.querySelectorAll(".listForPlayList")
//         var channel = document.querySelectorAll(".deleteButton")
//         for(let i3 = 0;i3 < channel.length;i3++) {
//             channel[i3].addEventListener("click",function() {
//                 pageClient[i3].remove()
//             })
//         }
//         localStorage.clear();
//     }
// };

// var pageClient = document.querySelectorAll(".listForPlayList")
// var channel = document.querySelectorAll(".deleteButton")
// for(let i3 = 0;i3 < channel.length;i3++) {
//     channel[i3].addEventListener("click",function() {
//         pageClient[i3].remove()
//     })
// }

