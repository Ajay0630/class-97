
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

userthename = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
function send_the_message_into_the_room_in_one_second() {
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({name : userthename, message : msg, like : 0});
      document.getElementById("message").value = null;
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            console.log(firebase_message_id);
            console.log(message_data);
            var name = message_data["name"];
            var message = message_data["message"];
            var likes = message_data["like"];
            namewithtag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
            messagewithtag = "<h4 class='message_h4 lead'>" + message + "</h4>";
            likebtn = "<button class='btn btn-warning btn-lg btn-block' id=" + firebase_message_id + " value=" + likes + " onclick='updatelikes(this.id)'>";
            spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>Likes :" + likes + "</span></button><hr>";
            row = namewithtag + messagewithtag + likebtn + spanwithtag;
            document.getElementById("the_one_and_only_div").innerHTML += row;
      } });  }); }
getData();
