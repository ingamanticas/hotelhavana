$( ".cta" ).click(function() {
  $( ".transition").toggleClass( "anim-trans" );
  $(".transition2").toggleClass("ranim-trans");
  $('.transition').fadeIn();
  $('.transition2').fadeIn();
});
