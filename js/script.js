// Remove preloader when loaded
$('#start').click(function() {
	$(".preloader").fadeOut(1000);
})


// Vegas Jquery framework for changing backgrounds

$('body').vegas({
  delay:10000,
  slides:[
    { src:'img/1.jpg', fade:1000 },
    { src:'img/2.jpg', fade:1000 },
    { src:'img/3.jpg', fade:1000 },
    { src:'img/4.jpg', fade:1000 }
  ],
  timer:false
});


// Nicescroll

// $(document).ready(function() {  
// 	$("html").niceScroll();
// });


// Navbar effects

$(document).ready(function() {
	$('.navbar-brand').click(function(e) {
		e.preventDefault();
		$('.nav-disappear:visible').hide("slow");
		$('.nav-disappear:hidden').show("fast");
	});

	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		if (scroll>0) {
			$('.nav-disappear').hide("slow");
		}
		else {
			$('.nav-disappear').show("fast");
		}
	});
});