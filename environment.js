var server = "https://allnet.webstart.am/api"
var pathnameUrl = window.location.pathname
var checkPath = pathnameUrl === "/index.html" || pathnameUrl === "/registerPage/register.html" 
|| pathnameUrl === "/signInPage/signIn.html" || pathnameUrl === "/forgetPassword/forget.html" || pathnameUrl === "/forgetPassword/newPassword.html"
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var ID = sessionStorage.getItem("ID")



var authentication = function() {
    if(!!sessionStorage.getItem("authenticated") && checkPath === true) {
        window.location.href = "../channelMainPage/channelMainPage.html";
    } else if(!!sessionStorage.getItem("authenticated") === false &&  checkPath === false) { 
        window.location.href = "/signInPage/signIn.html";
        sessionStorage.removeItem("authenticated") ;
    }
}
authentication()

var createNotification = function(data) {
    var mainNotification = document.querySelector(".innerScroll");
    if(!!mainNotification) {
        var notificationInner = document.getElementById("findNotification");
        var clonedNote = notificationInner.cloneNode(true);
        var deskriptionNotif = clonedNote.querySelector(".titlering")
        var timering = clonedNote.querySelector(".timering")
        var notMessige = clonedNote.querySelector(".notMessige ")
        clonedNote.data_src = data.id
        deskriptionNotif.innerHTML = data.title
        timering.innerHTML = data.created_at.split(' ')[0]
        notMessige.innerHTML = data.description
        clonedNote.id = "";
        clonedNote.classList.add("clonedNote");
        mainNotification.appendChild(clonedNote);
    }
}

var fetchNotification = function(token) {
    // debugger
    fetch(server+"/notification/"+ID,{
        mode: 'cors', 
        method : "GET", 
        headers : {"Content-Type" : "application/json","Accept" : "application/json","Authorization" : "Bearer "+token+""}
    }).then(function(result) {return  result.json()})
    .then(function(result) {
        if(!!result.notifications) {
            result.notifications.forEach(function(val) {
                createNotification(val);
            });
            callnotichild()
        }
    });
};

var postSign_In = function() {
    fetch(server+"/login", {
        mode: 'cors',
        method : "POST",
        credentials: "same-origin",
        headers : {'Content-Type' : 'application/json','Accept': 'application/json'},
        body : JSON.stringify({email:input[0].value,password:input[1].value})
    }).then(function(response) { return response.json()} )
    .then(function(response) {
        validation(response,input[0],input[1])
    })
}

var validation = function(response,email,password) {
    if(!(email.value.match(mailformat))) {
        errorFunction([email]);
        TimeOuth([email]);
    } else if(password.value.length < 6 || !response.access_token) {
        errorFunction([email,password]);
        TimeOuth([email,password]);
    } else if(!!response.access_token) {
        sessionStorage.setItem("authenticated", response.access_token);
        fetchUserHomePage(sessionStorage.getItem("authenticated"));
    };
};

var fetchUserHomePage = function(token) {
    fetch(server+"/userPage",{
        mode: 'cors', 
        method : "GET", 
        headers : {"Content-Type" : "application/json","Accept" : "application/json","Authorization" : "Bearer "+token+""}
    }).then(function(result) {return result.json()})
    .then(function(result) {
        sessionStorage.setItem("ID",result.user.id);
        ID = result.user.id;
        window.location.href = "../channelMainPage/channelMainPage.html";
    });
}

var errorFunction = function(array) {
    array.forEach(function(val,i) {
        val.classList.add("errorBorder");
    });
};

var TimeOuth = function(array) {
    setTimeout(function(){
        array.forEach(function(val,i) {
            val.classList.remove("errorBorder");
        });
    },2000);
};


var logauth = function(token) {
    fetch(server + "/logout",{
        mode: 'cors',
        method : "POST",
        headers : {"Content-Type" : "application/json","Accept" : "application/json","Authorization" : "Bearer "+token+""}
    }).then(function(response) {return response.json()})
    .then(function(response) {
        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('ID');
        location.reload();
    })
}

var updateUserPage = function(token,createChild) {
    img_loading.style.display = "inline"
    fetch(server+"/userPage",{
        mode: 'cors', 
        method : "GET", 
        headers : {"Content-Type" : "application/json","Accept" : "application/json","Authorization" : "Bearer "+token+""}
    }).then(function(result) {return  result.json()})
    .then(function(result) {
        createChild(result)
    });
}

var updateUserDate = function(body,token,id) {
    fetch(server+"/user/"+id,{
        mode: 'cors',
        method : "PUT",
        headers : {"Content-Type" : "application/json","Accept" : "application/json","Authorization" : "Bearer "+token+""},
        body:JSON.stringify(body)
    }).then(function(result){return result.json()})
    .then(function(result) {
        console.log(result,"updateUserDate");
    });
}

var updatePassword = function(data) {
    form[1].type = "email"
    form[2].type = "password"
    form[0].value = data.user.username
    form[1].value = data.user.email
    form[2].value = data.user.password
}

var deleteMessagePost = function(token,id) {
    fetch(server+"/notification/"+id,{
        mode: 'cors',
        method : "DELETE",
        headers : {"Content-Type" : "application/json","Accept" : "application/json","Authorization" : "Bearer "+token+""},
        body:JSON.stringify(id)
    })
    .then(function(result) {return result.json()})
    .then(function(result) {console.log(result,"delete message")});
}


