(function($) {
  "use strict";
  $(function() {
  //$(".porfolio_items, .slider_items a, .gallery-icon a").preloader();
  $('.gallery-item a').attr('data-gal', 'prettyPhoto[gallery]');
  $("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
$('.more-link').addClass("readmore readmore-1");
$('#mid_container').animate({opacity:1},1200);
$('#main_slider').animate({opacity:1},1200);
$('.Portfolio_gallery').animate({opacity:1},2000);
$(".panel-grid-cell:not(.panel-row-style)").parent('.panel-grid').addClass("no-panel-row-style");
$('#wp-calendar a').parent().addClass('cal-blog');
$('.widget_iconbox-widget, .widget_kaya-client, .widget_kaya-skillset' ).parent().addClass('kaya_widegts_parent');
$('.footer_widgets > div').addClass('footer_widgets_column');
$('.widget_sudo_slider #controls').addClass('widget_controls');
$('.widget_kaya-skillset').parent().addClass('widget_kaya-skillset-parent');
$('.widget_kaya-testimonials').parent().addClass("kaya-testimoial-parent");  // Testimonial
$('.widget_dropcap-widget').parent().addClass("kaya-drocap-parent");  // Testimonial
$('.widget_kaya-rolling').parent().addClass("kaya-rollnumber-parent");  // Rolling numbers 
$('.panel-row-style').parent().addClass("panel-row-style-parent");
$( ".promobox_video_bg" ).next('.panel-row-style-parent').prev('.promobox_video_bg').addClass('promobox_bottom');

$('.widget_kaya-portfolio-slider-widget').parent().parent().next('.panel-row-style-parent').prev().addClass('portfolio_slider_container');
//$('.widget_kaya-portfolio-slider-widget').parent().parent().css({"padding-bottom":"0","position":"relative","z-index":"3"} );
$('.panel-row-style-parent').next(".no-panel-row-style").css("cssText", "padding-top: 80px !important;");
$(".panel-row-style-parent").css("cssText", "margin-bottom: 0px !important;");
//$('.widget_kaya-title').parent().parent(".panel-row-style").css({"padding-bottom": "0px"} );
$('.widget_kaya-title').parent().parent(".no-panel-row-style").css("cssText", "margin-bottom: 40px !important;");
$('.widget_kaya-title').parent().parent(".no-panel-row-style").attr('style', 'margin-bottom: 40px!important; border-bottom: 0!important');
$('.widget_kaya-title.panel-last-child').parent('.panel-grid-cell').parent(".panel-row-style").attr('style',  'padding-bottom: 0px!important; border-bottom: 0!important');
$('.widget_kaya-title').parent().parent().parent(".panel-row-style-parent").next(".panel-row-style-parent").children(".panel-row-style").attr('style',  'padding-top: 40px !important; border-top:0!important');
$('.panel-row-style-parent').next(".no-panel-row-style").css({"padding-top":"80px"} );
$('.entry-content div.panel-row-style-parent:last-child').parent().parent().parent().parent().addClass("panel-row-style-parent-last");

$('.entry-content div.promobox_video_bg:last-child').parent().parent().parent().parent().addClass("panel-row-style-parent-last");

$('.entry-content div.panel-row-style-parent:nth-child(1)').parent().parent().parent().parent().addClass("panel-row-style-parent-first");
$('.entry-content').closest('div[class^="panel-row-style-parent"]').parent().parent().addClass('test');
$('.footer_widgets').find('div[class^="footer_widget_seperator"]:last').remove();
  $('footer .widget_container ul li:first').css({"border-top":"0",  "padding-top":"0"});
  $('#mid_container, #slider_wrapper, #homeslider, .single_img  ul.isotope_gallery').animate({opacity:1},5000);
  $( ".panel-row-style" ).append( "<div class='container_bg'> </div>" );
$('span#controls .prevBtn, span#controls .nextBtn').css('display','block');
$('.widget_kaya-slider').animate({opacity:1},5000);
// Pricing table
$('.widget_innova-pricing-table').parent().addClass('pricing_table_parent');
$('.pricing_table_parent').next('.pricing_table_parent').css('padding','0').prev('.pricing_table_parent').css('padding-right','0');

 //Portfolio hover
  $('.portfolio-container').hover( 
    function(){
    $(this).stop().find('.pf_item_box div').animate({top:'-15px'},'fast')
    },
    function(){
    $(this).stop().find('.pf_item_box div').animate({top:'0px'},'fast')
    });



// Responsive Menu Nav
   $("<select />").appendTo(".menu");
  // Create default option "Go to..."
  $("<option />", {
  "selected": "selected",
  "value"   : "",
  "text"    : "Go to..."
  }).appendTo(".menu select");

  // Populate dropdowns with the first menu items
  $(".menu ul li a").each(function() {
  var el = $(this);
  if($(this).parents("ul.sub-menu").length > 0){
  $("<option />",{
  "value"   : el.attr("href"),
  //"text"    : '\xa0'+ '\xa0'+ '\xa0'+ el.text()
  "text"    : " -- "+ el.text()
  }).appendTo(".menu select");
  }else{
  $("<option />", {
  "value"   : el.attr("href"),
  "text"    : el.text()
  }).appendTo(".menu select");
  }
  });
  //make responsive dropdown menu actually work     
  $(".menu select").change(function() {
  window.location = $(this).find("option:selected").val();
  });

  $('.item_thumb_gallery, .meta_info, .gallery-item, .isotope_gallery li').hover(
  //Gallery
  function() {
  $(this).find('img').stop().animate({opacity:0.7},1200);
  $(this).find('.image, .meta_info .post_link').css({"left":"0px"}).stop().animate({"left":"50%",opacity:1},600); 

  },function() {
  $(this).find('.image, .post_link').stop().animate({opacity:0},400);
  $(this).find('img').stop().animate({opacity:1},1200);
  });
  // $ slide menu 
  $('.menu ul:first > li').addClass("main-links");
  $(".menu ul li.main-links:last-child").css("border-right","none");

  // shortcode toggle 
  $(".toggle_content").hide();
  $("div.trigger").click(function(){
  $(this).toggleClass("active").next().slideToggle("slow");

  });

/****************** masonry code **************/
if (jQuery().isotope){
$(window).load(function(){
$(function (){
  var isotopeContainer = $('.isotope-container, .blog-isotope-container, .widget-isotope-container, .gallery');
  isotopeContainer.isotope({
    masonry:{
                   columnWidth:    1,
                    isAnimated:     true,
                    isFitWidth:     true
                }
  });
});
});
}

// Scroll Top
 $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scroll_top').fadeIn();
    } else {
        $('.scroll_top').fadeOut();
    }
});
 $('.scroll_top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});


// Slider Arrows Hide / Show 
$('.widget_controls .prevBtn, .widget_sudo_slider .nextBtn, .slides-navigation, .bx-wrapper .bx-controls-direction a').hide();
$('#sudo_slider_wrapper, #slides, .widget_kaya-slider').hover(function(){
  //alert('hi');
     $('.widget_controls .prevBtn, .widget_controls .nextBtn, .slides-navigation, .bx-wrapper .bx-controls-direction a', this).fadeIn();
},function(){
     $('.widget_controls .prevBtn, .widget_controls .nextBtn, .slides-navigation, .bx-wrapper .bx-controls-direction a', this).fadeOut();
});

 $(window).resize(function(){
    var windowHeight = (Math.ceil($(window).height()));
$("#video_wrapper, #parallax_single_image").height(windowHeight);
$(".slider_items img").css({'width':$(window).width()});
 var $height = (jQuery(".video_inner_text").height() / 2)-50;
 var $video_container_height = jQuery('.video_inner_text').css({'margin-top' : -$height}); 
var $boxed_width = $('#box_layout').css('width');
$(".slides-container > div").css({'width':$boxed_width});
  });

var $boxed_width = $('#box_layout').css('width');
$(".slides-container > div").css({'width':$boxed_width});

var windowHeight = (Math.ceil($(window).height()));

$("#video_wrapper, #parallax_single_image").height(windowHeight);
$(".slider_items img").css({'width':$(window).width()});

 var $height = (jQuery(".video_inner_text").height() / 2)-50;
 var $video_container_height = jQuery('.video_inner_text').css({'margin-top' : -$height}); 

   $(".portfolio-container").hover(function(){
   // alert("test");

   $(this).find('.pf_item_wrapper').css("cssText", "display: block !important;");


    }, function(){

 $(this).find('.pf_item_wrapper').css("cssText", "display: none !important;");

    });

 $("#mid_container_wrapper").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});
/* Shooping Cart */
$('.shop-product-items li .shop-produt-image, .related-product-slider .shop-produt-image').hover(function(){
    $(this).find('.product-cart-button').css({'display':'block','right' : "-50px"}).stop(true, true).animate({'display':'block','right' : "0"});
},function(){
     $(this).find('.product-cart-button').stop(true, true).css({'display':'block','right':'0px'}).animate({'display':'block','right' : "-50px"});
})
//$('.attachment-shop_single.wp-post-image').attr('data-pimg',"http://localhost/hair/wp-content/uploads/2013/06/T_2_front1.jpg");
$('.widget_shopping_cart_content .buttons a').removeClass('wc-forward');
$('.button, .form-submit #submit, .widget_shopping_cart_content .buttons a').not('.wc-forward').addClass('primary-button');
$('.checkout-button, #place_order, .cart-sussess-message a').addClass('seconadry-button');
$('.related.products li, .upsells.products li').removeClass('first');
$('.related.products li, .upsells.products li').removeClass('last');
$('.add_to_wishlist').removeClass('single_add_to_wishlist button alt primary-button');
$('i.icon-align-right').removeClass('icon-align-right').addClass('fa fa-heart');
});
})(jQuery);