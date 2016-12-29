// PREVENT ACTIONS

var ipgForm = document.querySelector("#ipgForm");
var ipgMessage = document.querySelector("#ipgMessage");

// prevent empty input

ipgForm.addEventListener("submit", function(e) {

    if(this.ipgInput.value === "") {
        e.preventDefault();
        alert("Wpisz swoje imię!");
    }

}, false);

// prevent keypress "Q"

ipgForm.querySelector("#ipgInput").addEventListener("keypress", function(e) {

    if(String.fromCharCode(e.charCode) === "Q") {
        e.preventDefault();
    }

}, false);

// show hidden message on click

ipgMessage.onclick = function(e) {

    e.preventDefault();
    var ipgShow = document.querySelector(e.target.hash); // e.target.href (server)
    ipgShow.style.display = "block";
    return false;

};

// LOAD

// show image dimensions

window.addEventListener("load", function (e) {
    
    var ipgPicture = document.querySelector(".ipgPicture");
    
    alert("Wymiary obrazka to: " + ipgPicture.offsetWidth + "px" + " na " + ipgPicture.offsetHeight + "px");
}, false);

// show content on DOMContentLoaded

document.addEventListener("DOMContentLoaded", function(e) {

     var ipgText = document.querySelector(".ipgText");

     alert( ipgText.textContent );
    
}, false);