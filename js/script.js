//navbar sticky
  
	$(window).click(function(){
		$('.navbarSticky').addClass('sticky');
	})
  

//Preloader
$(document).ready(function(){
	$('#loader').hide();
});

//ancre-fluide
// $('a[href^="#"]').on('click', function(e){
// 	let link = $(this).attr('href'),
// 	elem = $(link);
// 	if(elem.length){
// 		let elemTop = elem.first().offset().top;
// 		$('html, body').animate({
// 			scrollTop: elemTop
// 		}, "fast");
// 	}
// });

ScrollReveal({ distance: '60px'},{duration : 1500});
ScrollReveal().reveal('.fromTop', {delay: 600, origin: 'top' }); 
ScrollReveal().reveal('.fromRight', {delay: 1000, origin: 'right'});
ScrollReveal().reveal('.fromBottom', {delay: 1200, origin: 'bottom'});
ScrollReveal().reveal('.fromLeft', {delay: 1500, origin: 'left'});
