//everything that needs the html to be ready
// if 'start' is pressed show only section id=audio
$(document).ready(function() {
    // if page is loaded then only show the frontpage
  $(".hidden" ).hide();

   $("#readmore1").click(function() {
       $("#readmore1").hide();
       $(".hidden").show();
   });
});
