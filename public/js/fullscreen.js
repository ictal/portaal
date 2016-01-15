jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
    function fullscreen(){
        jQuery('#pagina1, #pagina2, #pagina3, #pagina4, #pagina5, #pagina6').css({
            height: jQuery(window).height()
        });
    }
  
    fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});