
const firebaseConfig = {
      apiKey: "AIzaSyAWazS5KP-Y-qpRgliCpofPhmlaFSoNEoA",
      authDomain: "burstlaugh-c02c8.firebaseapp.com",
      databaseURL: "https://burstlaugh-c02c8-default-rtdb.firebaseio.com",
      projectId: "burstlaugh-c02c8",
      storageBucket: "burstlaugh-c02c8.appspot.com",
      messagingSenderId: "724941565198",
      appId: "1:724941565198:web:91a272e0085340b930fb5f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("username")
    document.getElementById("user_name").innerHTML = "Welcome to KyteMSG" + user_name
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names)
      row = "<div class ='room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'" + Room_names + "</div>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout()
{
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}

function addRoom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose = "Adding Room Name"
      });
      localStorage.setItem("room_name",room_name)
      window.location = "kwitter_room.html"
}

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("roomname",name)
      window.location ="kwitter_page.html";
}