$(document).ready(function() {
  var form = $("#form");
  form.submit(function(e) {
    e.preventDefault();
    alert("Dziękujemy za wiadomość");
    var user = $("#tcUser");
    var email = $("#tcEmail");
    var message = $("#tcMessage");

    $.ajax({
      type: "POST",
      url: "../form.php",
      data: {
        user: user.val(),
        email: email.val(),
        message: message.val()
      },
      success: function() {
        console.log("ok");
      },
      dataType: "json"
    });
  });
});