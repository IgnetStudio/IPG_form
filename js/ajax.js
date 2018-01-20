$(document).ready(function () {
  var form = $("#ipgFormValid");
  form.submit(function (e) {
    e.preventDefault();
    alert("Dziękujemy za wiadomość");
    var user = $("#ipgFormName");
    var email = $("#ipgFormEmail");
    var subject = $("#ipgFormSubject");
    var message = $("#ipgFormMessage");

    $.ajax({
      type: "POST",
      url: "form.php",
      data: {
        user: user.val(),
        email: email.val(),
        subject: subject.val(),
        message: message.val()
      },
      success: function () {
        console.log("ok");
      },
      dataType: "json"
    });
  });
});