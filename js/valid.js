// to do:
// komunikat ok po submit
// sprawdzenie maila przez regexp
(function () {
    var ipgFormValid = document.querySelector("#ipgFormValid");
    var ipgCheckFields = ipgFormValid.querySelectorAll("[data-error]");

    function fnIsEmpty(field) {
        return field.value !== ""; // checking empty & selected data
    }

    function fnIsMail(field) {
        return field.value.indexOf("@") !== -1; // checking @ (regEx for validate address)
    }

    function fnIsMinimal(field, min) {
        return field.value.length >= min; // checking number of signs inside textarea
    }

    function fnShowErrors(callErrors) {
        // display errors
        var ul = document.querySelector("ul.errors");
        if (!ul) {
            ul = document.createElement("ul");
            ul.classList.add("errors");
        }
        ul.innerHTML = "";
        callErrors.forEach(function (error) {
            var li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        });
        ipgFormValid.parentNode.insertBefore(ul, ipgFormValid);
    }
    ipgFormValid.addEventListener("submit", function (e) {
        e.preventDefault();
        var arrErrors = [];
        for (var i = 0; i < ipgCheckFields.length; i++) {
            var arrField = ipgCheckFields[i];
            var blValid = false;
            if (arrField.type === "text") {
                blValid = fnIsEmpty(arrField);
            }
            else if (arrField.type === "email") {
                blValid = fnIsMail(arrField);
            }
            else if (arrField.type === "select-one") {
                blValid = fnIsEmpty(arrField);
            }
            else if (arrField.type === "textarea") {
                blValid = fnIsMinimal(arrField, 10);
            }
            if (!blValid) {
                arrField.classList.add("error");
                arrErrors.push(arrField.dataset.error);
            }
            else {
                arrField.classList.remove("error");
            }
        }
        if (arrErrors.length) {
            fnShowErrors(arrErrors);
        }
        else {
            ipgFormValid.submit();
        }
        console.log(arrErrors);
    }, false);
})();