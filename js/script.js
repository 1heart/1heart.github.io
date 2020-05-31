var email = "yixin" + "@" + "yixinlin.net";

var map = {
  "resume-link": "resume",
  "writings-link": "writings",
  "papers-link": "paper-review",
  "email-link": "email (click to copy): " + email ,
  "facebook-link": "facebook",
  "linkedin-link": "linkedin",
  "github-link": "github",
};

$(".link").each(function(index) {
  $(this).hover(function() {
    var key = $(this).attr('id');
    $("#hello-link").text(map[key]);
  }, function() {
    $("#hello-link").text("hello.");
  });
});

function copyEmail() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(email).select();
    document.execCommand("copy");
    $temp.remove();
}

