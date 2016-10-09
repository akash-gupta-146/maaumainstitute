(function($) {
  "use strict";
  $(function() {

 var group = $('#customize-control-kaya_logo_type input');
    $('#customize-control-upload_logo').css('display','none');
    $('#customize-control-text_logo').css('display','none');
    $('#customize-control-text_logo_font_size').css('display','none');
    $('#customize-control-text_logo_font_color').css('display','none');
   //var group = $('#customize-control-x_stack input');
 var text_logo_type   = $('#customize-control-kaya_logo_type input[value="text_logo"]');
 var img_logo_type   = $('#customize-control-kaya_logo_type input[value="img_logo"]');
      if(text_logo_type.is(":checked")){
            $('#customize-control-text_logo').css('display','block');
            $('#customize-control-text_logo_font_size').css('display','block');
            $('#customize-control-text_logo_font_color').css('display','block');
           //alert('text');
        }
        else if(img_logo_type.is(":checked")){
           $('#customize-control-upload_logo').css('display','block');
            //alert('img');
        } 
        else {
           //$('#customize-control-upload_logo').css('display','none');
       }  
  group.change( function() {
    if ($(this).val() == 'text_logo') {
            $('#customize-control-text_logo').css('display','block');
            $('#customize-control-text_logo_font_size').css('display','block');
            $('#customize-control-text_logo_font_color').css('display','block');
            $('#customize-control-upload_logo').css('display','none');
           //alert('text');
    }else if ($(this).val() == 'img_logo') {
         $('#customize-control-upload_logo').css('display','block');
         $('#customize-control-text_logo').css('display','none');
         $('#customize-control-text_logo_font_size').css('display','none');
         $('#customize-control-text_logo_font_color').css('display','none');
            //alert('img');
          }
  });

  // On change
     $('.kaya-radio-img').click(function() {
    $('.kaya-radio-img-selected').removeClass('kaya-radio-img-selected');
    $(this).addClass('kaya-radio-img-selected').children('input[@type="radio"]').prop('checked', true);
   });

});
})(jQuery);
jQuery(document).ready(function () {
    jQuery('.redux-opts-multi-text-remove').live('click', function () {
        jQuery(this).prev('input[type="text"]').val('');
        jQuery(this).parent().fadeOut('slow', function () { jQuery(this).remove(); });
    });

    jQuery('.redux-opts-multi-text-add').click(function () {
        var new_input = jQuery('#' + jQuery(this).attr('rel-id') + ' li:last-child').clone();
        jQuery('#' + jQuery(this).attr('rel-id')).append(new_input);
        jQuery('#' + jQuery(this).attr('rel-id') + ' li:last-child').removeAttr('style');
        jQuery('#' + jQuery(this).attr('rel-id') + ' li:last-child input[type="text"]').val('');
        jQuery('#' + jQuery(this).attr('rel-id') + ' li:last-child input[type="text"]').attr('name', jQuery(this).attr('rel-name'));
    });
});
