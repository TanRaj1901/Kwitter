
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDWSPZ2vfV51_wMkenNcltnXMTT0w0x780",
    authDomain: "kwitter-web-app-9f5a0.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-9f5a0-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-9f5a0",
    storageBucket: "kwitter-web-app-9f5a0.appspot.com",
    messagingSenderId: "214051946799",
    appId: "1:214051946799:web:b367548262bb463b09a1da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
    });

    localStorage.setItem("Room Name" , room_name);

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'> #" + Room_name  + "</div><hr>";
      document.getElementById("output").innerHTML = row;

      });});}
getData();

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room Name", name);
  window.location = "kwitter_page.html";
}