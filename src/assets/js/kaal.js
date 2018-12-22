 $(document).ready(function(){
    $('.sidenav').sidenav();

    $('#pulse-effect').addClass('animated pulse');
  
    $('.modal').modal();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

        // move next carousel
   $('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 });

 // move prev carousel
 $('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 });
  });

      