// counter 
$('.counter').counterUp({
	delay: 10,
	time: 10000
  });



  


      // review-active
$('.testmonial_active ').owlCarousel({
	loop:true,
	margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
	nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
	responsive:{
		0:{
			items:1,
			dots:false,
			nav:false,
		},
		767:{
			items:1,
			dots:false,
			nav:false,
		},
		992:{
			items:1,
			nav:false
		},
		1200:{
			items:1,
			nav:false
		},
		1500:{
			items:1
		}
	}
  });
  
  // review-active
  $('.financial_active').owlCarousel({
	loop:true,
	margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
	nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  
	responsive:{
		0:{
			items:1,
			nav:false
		},
		767:{
			items:1,
			nav:false
		},
		992:{
			items:1
		},
		1200:{
			items:1
		},
		1500:{
			items:1
		}
	}
  });
  
  // review-active
  $('.testmonial_active2').owlCarousel({
	loop:true,
	margin:0,
  items:1,
  autoplay:false,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
	nav:false,
  dots:true,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  // dotsData: true,
  center: true,
	responsive:{
		0:{
			items:1,
			nav:false
		},
		767:{
			items:1,
			nav:false
		},
		992:{
			items:1
		},
		1200:{
			items:1
		},
		1500:{
			items:1
		}
	}
  });






  
  $(document).ready(function () {
        
	$('.first-button').on('click', function () {
	
	  $('.animated-icon1').toggleClass('open');
	});
	$('.second-button').on('click', function () {
	
	  $('.animated-icon2').toggleClass('open');
	});
	$('.third-button').on('click', function () {
	
	  $('.animated-icon3').toggleClass('open');
	});
	
	});