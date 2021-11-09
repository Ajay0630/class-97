// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBLeYFXIY84O74i46AGLnWX0D7jS9o_ibM",
      authDomain: "kwitter-2e680.firebaseapp.com",
      databaseURL: "https://kwitter-2e680-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e680",
      storageBucket: "kwitter-2e680.appspot.com",
      messagingSenderId: "428623542676",
      appId: "1:428623542676:web:046b9ab7ff19f968a4f781"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome, " + username + ".";
function roomaddd() {
      roomnam = document.getElementById("obviousnameofthe").value;
      firebase.database().ref("/").child(roomnam).update({
            purpose : "adding room name"
      });
      localStorage.setItem("roomname", roomnam);
      window.location = "kwitter_message.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='goroom(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function goroom(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_message.html";
}
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
