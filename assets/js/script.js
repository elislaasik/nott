//everything that needs the html to be ready
$(document).ready(function() {

    //menu toggler: function
    const toggleMenu = function() {
        $('.toggler').toggleClass('open');
        $('nav').toggleClass('open');
    }

    // menu toggler: listeners
    $('.toggler').on('click', toggleMenu);
    $('nav a').on('click', toggleMenu);

});