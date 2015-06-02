mainOffset = $("#main").offset().top;

animationDuration = 500;

$("#go").click(function() {
	$('html, body').animate({
		scrollTop: mainOffset
	}, animationDuration);
});

$(document).ready(function() {
	$('.hidden').removeClass('hidden').hide();
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > mainOffset - 300) {
		$('.menubar, .links').fadeIn(animationDuration);
	} else {
		$('.menubar, .links').fadeOut(animationDuration);
	}
});

function hideAll() {
	$("#main").children().hide();
	$("#home-link, #art-link, #music-link, #work-link, #writings-link, #resume-link").removeClass('selected', animationDuration);
}

// Here follows some terrible code.

$('#go, #home-link').click(function() {
	hideAll();
	$('#home').fadeIn(animationDuration);
	$('#home-link').addClass('selected');
});
$('#art-link').click(function() {
	hideAll();
	$('#art').fadeIn(animationDuration);
	$('#art-link').addClass('selected');
});
$('#music-link').click(function() {
	hideAll();
	$('#music').fadeIn(animationDuration);
	$('#music-link').addClass('selected');
});
$('#work-link').click(function() {
	hideAll();
	$('#work').fadeIn(animationDuration);
	$('#work-link').addClass('selected');
});
$('#writings-link').click(function() {
	hideAll();
	$('#writings').fadeIn(animationDuration);
	$('#writings-link').addClass('selected');
});
$('#resume-link').click(function(e) {
	window.location.href = "https://www.dropbox.com/s/5l6kmpxkq9efdeb/resume.pdf?dl=0";
});

$('.menubar').click(function(e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: 900
	}, animationDuration);
});