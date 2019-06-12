var map = {
  "resume-link": "resume",
  "writings-link": "writings",
  "papers-link": "paper-review",
  "email-link": "email: yixinlin at fb.com",
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

