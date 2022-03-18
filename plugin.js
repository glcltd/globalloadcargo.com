/* bootstrap menu custom code */
$(document).ready(function() {
	$(".carousel.slide .item:first-child").addClass("active");
	$("ol.carousel-indicators li:first-child").addClass("active");
    $("ul.navbar-nav li").find("ul").addClass("dropdown-menu").parent("li").addClass("dropdown");
	
	
$(".mobileNavWrapper ul>li").find("ul").parent().prepend('<span class="hasSub"></span>');
$(".mobileNavWrapper ul li .hasSub").click(function(){
	$(this).siblings("ul").slideToggle();
});




	//$('.fancybox1').fancybox();
	
	
});

/* table responsive */
/*
responsiveTable();
$( window ).resize(function() {
	responsiveTable();
});

function responsiveTable(){
	if ($(window).width() < 768) {
	var keydata;
	var inc=1;
	 $('.destination-detail table tr th').each(function() {
		 keydata =  $(this).html();
		 $('head').append('<style>.destination-detail table td:nth-child('+inc+'):before{content:"'+keydata+' : "}</style>');		 
		 inc++;
	 });
	} else{
	$('head').append('<style>.destination-detail table td:nth-child(n):before{content:""}</style>');
}
}
*/
/* table responsive */



$(window).scroll(function(){if($(this).scrollTop() > 100){$('#backtotop').fadeIn();}else{$('#backtotop').fadeOut();}});
$(document).on("click","#backtotop",function(){$('html,body').animate({scrollTop:0},1500);});


/* accordian start */
$(document).ready(function(){
	$(".accordion .accordion-title").eq(0).addClass("active");
	$(".accordion .accordion-detail").eq(0).show();
	$(".accordion .accordion-title").click(function(){
		$(this).next(".accordion-detail").slideToggle("10")
		.siblings(".accordion-detail:visible").slideUp("10");
		$(this).toggleClass("active");
		$(this).siblings(".accordion-title").removeClass("active");
	});
});
/* accordian start End */


$(document).ready(function($) {
	var clients = $('.owl-clients'); 
	clients.owlCarousel({
		loop:true,
		nav:false,
		dots:false,
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:5000,
		margin:5,
		responsive:{
		320:{items:3},
		480:{items:4},
		600:{items:5},			
		960:{items:6},
		1200:{items:8}
		}
	});
	var testimonial = $('.owl-testimonial'); 
	testimonial.owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:5000,
		margin:30,
		responsive:{
		320:{items:1},
		480:{items:1},
		600:{items:2},			
		960:{items:3},
		1200:{items:4}
		}
	});
	var slidLogo = $('.owl-slidLogo'); 
	slidLogo.owlCarousel({
		loop:true,
		nav:false,
		dots:false,
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:1000,
		margin:0,
		responsive:{
		320:{items:1},
		480:{items:1},
		600:{items:1},			
		960:{items:1},
		1200:{items:1}
		}
	});
});


/* menu */

jQuery(document).ready(function($) {
	// define a few selected elements to help with faster DOM access
	var mobileSize, offsetVal,
	mobileMenu = $(".mobileNavWrapper"),
	moveOnMenuOpen = $(".mobileNavWrapper,.pageContent"),
	pageHeader = $("header");

	// note whether the screen size is roughly a mobile device (tablet portrait and below), and set a global var accordingly
	function detectWindowSize() {
		if ($(window).width() <= 850) {
			mobileSize = true;
		} else {
			mobileSize = true;
			moveOnMenuOpen.removeClass("showNav");
		}

		if ($(window).width() < 985) {
			offsetVal = 122;
		} else {
			offsetVal = 115;
		}
	}

	// run this on page load
	detectWindowSize();

	// detect a browser window resize event and throttle the output slightly (limited to 10 times/second)
	// this keeps resize detection from being spastic on IE and Webkit ( http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/ )
	( function( $,sr ){
	// debouncing function from John Hann ( http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/ )
	var debounce = function ( func, threshold, execAsap ) {
		var timeout;
		return function debounced ( ) {
			var obj = this, args = arguments;
			function delayed ( ) {
				if ( !execAsap )
					func.apply( obj, args );
				timeout = null;
			};

			if ( timeout )
				clearTimeout( timeout );
			else if ( execAsap )
				func.apply( obj, args );

			timeout = setTimeout( delayed, threshold || 100 );
		};
	}
		// smartresize
		jQuery.fn[sr] = function( fn ){ return fn ? this.bind( 'resize', debounce( fn ) ) : this.trigger( sr ); };

	} )( jQuery,'smartresize' );

	// detect the window size whenever the viewport changes
	$( window ).smartresize( function( ){
		detectWindowSize();
	});

	// show the main menu when you click the menu button
	$("#mobileMenuButton").on("click", function(e) {
		e.stopPropagation( );
		moveOnMenuOpen.toggleClass("showNav");
	});

	// hide the menu on page click/tap if mobile menu is showing
	$(".pageContent").on("click", function() {
		if (mobileSize) {
			moveOnMenuOpen.removeClass("showNav");
		}
	});


});
 


