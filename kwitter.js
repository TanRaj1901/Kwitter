function addUser() {
    var user_name = document.getElementById("user_name").value;

    if (user_name == "") {
        code = "<div class='alert alert-warning alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Alert!</strong> Username Required!</div>"
        document.getElementById("warning").innerHTML = code;
    }
    else {
        localStorage.setItem("Username" , user_name);
        window.location = "kwitter_room.html";
        console.log("Username" + user_name);
    }
}