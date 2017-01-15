var inputTitle = document.getElementById("inputTitle");
var printTitle = document.getElementById("printTitle");
var inputContent = document.getElementById("inputContent");
var printContent = document.getElementById("printContent");

function Printer(textInput, textParagraph) {
    this.textInput = textInput;
    this.textParagraph = textParagraph;
    this.textPrint = function () {
        textInput.addEventListener("keyup", function () {
            var textTemp = this.value;
            for (var i = 0; i < textTemp.length; i++) {
                textTemp = textTemp.replace(" ", "&#160"); // replace to hard space
            };
            textParagraph.innerHTML = textTemp;
        }, false);
    }
};
var printTitle = new Printer(inputTitle, printTitle);
printTitle.textPrint();
var printContent = new Printer(inputContent, printContent);
printContent.textPrint();