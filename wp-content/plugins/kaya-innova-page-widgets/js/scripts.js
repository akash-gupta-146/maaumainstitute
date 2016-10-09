(function( $ ) {
    "use strict";
    
      $(".innova-portfolio-container a").bind({
        mousedown: function() { 
                  $(this).addClass("closed");
              },
        mouseup: function() {
                  $(this).removeClass("closed");
              }
      });

      // Info Boxes
      $( ".info_box .delete" ).click(function() {
          $(this).parent('.info_box').parent().animate({ opacity: 'hide' }, "slow");
      });
      // Toggle Content
     $(".toggle_content").hide();
             $("strong.trigger").click(function(){
           $(this).toggleClass("active").next().slideToggle("slow");
        
      });
   jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },4000);
     jQuery(this).find('.skill-bar-percent, .left_arrow').animate({
        left : jQuery(this).attr('data-percent')
    },4000);
   //  $( ".skill-bar-percent" ).animate({ opacity: 1}, 1500 );
});


  $('.innova-portfolio-container').hover( 
    function(){
    $(this).stop().find('.pf_item_box div').animate({top:'-15px'},'fast')
    },
    function(){
    $(this).stop().find('.pf_item_box div').animate({top:'0px'},'fast')
    });

 // Portfolio Slider Width 


}(jQuery));