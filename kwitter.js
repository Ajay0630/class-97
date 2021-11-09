function joinedKwitter() {
    var name_of_the_user = document.getElementById("username").value;
    localStorage.setItem("username", name_of_the_user);
    window.location = "kwitter_room.html"
}