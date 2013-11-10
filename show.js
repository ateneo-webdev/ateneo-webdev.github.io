$(".more").click(function () {
/*$("#hide1").slideToggle("slow");*/
$("#hide1").fadeIn(600);
$("#wrapper_blog").css("height", "2300px");
$(".more").css("display", "none");
$(".less").css("display", "block");
});
$(".less").click(function () {
/*$("#hide1").slideToggle("slow");*/
$(".less").css("display", "none");
$(".more").css("display", "block");
$("#hide1").fadeOut(300);
$("#wrapper_blog").css("height", "1590px");
});
