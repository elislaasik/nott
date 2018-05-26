//everything that needs the html to be ready
// if 'start' is pressed show only section id=audio
$(document).ready(function() {
    // if page is loaded then only show the frontpage
  $(".hidden" ).hide();

//for every read button
   $(".read").on("click", function(){
     //with data target
     var targetName = this.getAttribute("data-target");
     //get by that target name
     var targetElement = document.getElementById(targetName);
     //then display it
     targetElement.style.display = "block";
   });
});
