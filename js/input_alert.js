var yourName = document.getElementById("yourName"); // złapanie imienia
var yourSurname = document.getElementById("yourSurname"); // złapanie nazwiska
document.getElementById("button").addEventListener("click", function () {
    // złapanie kliknięcia w przycisk
    if (yourName.value === "" || yourSurname.value === "") {
        alert("Podaj imię i nazwisko.") // przypadek pustego pola (pustych pól)
    }
    else {
        alert("Witaj, " + yourName.value + " " + yourSurname.value + "!"); // przypadek wypełnionych pól
    }
}, false); // wartość logiczna dla fazy capturing, zazwyczaj false