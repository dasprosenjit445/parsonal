/* owlCarousel--------*/
$(".clients-part").owlCarousel({
		items:5,
		margin:30,
		loop:true,
		autoplay:true,
		center:true,
		nav:true,
		responsive:{
			0:{
				items:3,
				nav:false
			},
			600:{
	  
			},
			1000:{
			  
			}
		}
	});

	$(".tastimonial-part").owlCarousel({
		items:3,
		margin:30,
		loop:true,
		autoplay:true,
		center:true,
		nav:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
	  
			},
			1000:{
			  
			}
		}
	});
	

	// Barfiller	
	$('#bar1').barfiller({
		barColor: 'green'
	});
	$('#bar2').barfiller({
		barColor: 'tomato'
	});
	$('#bar3').barfiller({
		barColor: 'red'
	});
	$('#bar4').barfiller({
		barColor: 'blue'
	});


	  
	 



	  /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
		if ($(this).scrollTop() > 20) {
			$('.header-area').addClass("sticky");
		} else {
			$('.header-area').removeClass("sticky");
		}
	});
	
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	  });
	
	  $.scrollUp({
		scrollText: '<i class="fas fa-arrow-alt-circle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 1000,
		animation: 'fade'
	});

	$('.image').magnificPopup({
		type: 'image',
		gallery: {
			enabled:true
		}
	  })
	  
	  new WOW().init();

	  var wow = new WOW(
		{
		  boxClass:     'wow',      
		  animateClass: 'animated',
		  offset:       0,         
		  mobile:       true,      
		  live:         true,      
		  callback:     function(box) {
		  },
		  scrollContainer: null,    
		  resetAnimation: true,  
		}
	  );

	
	