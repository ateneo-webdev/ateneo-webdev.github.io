function slideSwitch() {
var $active = $('#slideshow A.active');
   
if ( $active.length == 0 ) $active = $('#slideshow A:last');
   
var $next =  $active.next().length ? $active.next()
: $('#slideshow A:first');

$active.addClass('last-active');
 
$next.css({opacity: 0.0})
	.addClass('active')
	.animate({opacity: 1.0}, 1000, function() {
            
	$active.removeClass('active last-active');
	});
}

$(function() {
	setInterval( "slideSwitch()", 5000 );
});
