// Remove preloader when loaded
$('#start').click(function() {
	$(".preloader").fadeOut(1000);
})


// Vegas Jquery framework for changing backgrounds

// $('body').vegas({
//   delay:10000,
//   slides:[
//     { src:'img/1.jpg', fade:1000 },
//     { src:'img/2.jpg', fade:1000 },
//     { src:'img/3.jpg', fade:1000 },
//     { src:'img/4.jpg', fade:1000 }
//   ],
//   timer:false
// });


// Nicescroll


// $(document).ready(function() {  
// 	$("html").niceScroll();
// });


// Navbar effects
var navbarHeight = $('.navbar').offset()['top'];

$(document).ready(function() {
	$('.full-background').fadeIn(3000);
	$('.navbar-brand').click(function(e) {
		e.preventDefault();
		$('.nav-disappear:visible').hide("slow");
		$('.nav-disappear:hidden').show("fast");
		$('.nav-appear:visible').hide("slow");
		$('.nav-appear:hidden').show("fast");
	});

	$(document).scroll(function() {
		var scroll = $(this).scrollTop();
		if (scroll>navbarHeight) {
			$('.nav-disappear').hide("slow");
			$('.nav-appear').show("fast");
		}
		else {
			$('.nav-disappear').show("fast");
			$('.nav-appear').hide("slow");
		}
	});
});

$(window).bind('scroll', function() {
	// Sticky scroll
	var currHeight = $(window).scrollTop();
	if ( currHeight > navbarHeight - 80) {
		$('.navbar').addClass('navbar-fixed-top');
		$('.navbar').show("slow");
	}
	else {
		$('.navbar').removeClass('navbar-fixed-top');


		$('.navbar').hide("slow");

		// Variable opacity based on location relative to navbar
		$('.background-overlay').css({"opacity": 0.5 + 0.8*(1 - ((navbarHeight - currHeight) / navbarHeight))/2 })
	}
});

// smooth scroll for "hello" button
$(function() {
	$('.jumbotron a').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: navbarHeight
        }, 1000);
        return false;
      }
    }

	});
});