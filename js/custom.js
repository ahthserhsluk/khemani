
jQuery(document).ready(function () {
    // use sctict mode js
    "use strict";
    

    /** =====================================
     *  Shop Item Cart
     * ===================================== **/
    $('.item-quantity .increment-button').on('click', function(){
        var pqty = $('.item-quantity .product-quantity').html();
        pqty++;
        $('.item-quantity .product-quantity').html(pqty);
    });
    $('.item-quantity .decrement-button').on('click', function(){
        var pqty = $('.item-quantity .product-quantity').html();
        if(pqty>1){
            pqty--;
        }
        $('.item-quantity .product-quantity').html(pqty);
    });
    /** =====================================
     *  Item price
     * ===================================== **/
    $('.shop-cart-item .increment-button').on('click', function(){
        var $shopCartItemParent = $(this).parents('.shop-cart-item'),
            pqty = $shopCartItemParent.find('.product-quantity').html();
        pqty++;
        $shopCartItemParent.find('.product-quantity').html(pqty);
        var itemPrice = $shopCartItemParent.find('.quantity-price span').html();
        $shopCartItemParent.find('.total-price span').html(pqty * itemPrice);

        var totalCost = 0;
        $('.shop-cart-item').find('.total-price span').each(function (){
            var data = $(this).html();
            data *= 1;
            totalCost += data;
        });
        $('.cart-total-cost span span').html(totalCost);
    });
    $('.shop-cart-item .decrement-button').on('click', function(){
        var $shopCartItemParent = $(this).parents('.shop-cart-item'),
            pqty = $shopCartItemParent.find('.product-quantity').html();
        if(pqty>0){
            pqty--;
        }
        $shopCartItemParent.find('.product-quantity').html(pqty);
        var itemPrice = $shopCartItemParent.find('.quantity-price span').html();
        $shopCartItemParent.find('.total-price span').html(pqty * itemPrice);
        var totalCost = 0;
        $('.shop-cart-item').find('.total-price span').each(function (){
            var data = $(this).html();
            data *= 1;
            totalCost += data;
        });
        $('.cart-total-cost span span').html(totalCost);
    });


    $(".xzoom, .xzoom-gallery").xzoom({
    });

    $('.cart-close').on('click', function(){
        $(this).parents('.shop-cart-item, .product-name-thumb').fadeOut(1000);
    });

    $('#grid').mixItUp();

    $('.filter-option li a').eq(0).addClass('active');

    $('.client-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay: false,
        dots: false,
        responsiveClass:true,
        item: 5,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
                loop:true,
                nav:false,
            }
        }
    });
     /*** =====================================
     * Parallax
     * =====================================***/
    if( $('.banner-counter').length ){
        $('.banner-counter').parallax("50%", 0.3);
    }
    
    //=========================
      // Price Range Slider
      //=========================
      if ($("#slider-range").length > 0)
      {
          $("#slider-range").slider({
              range: true,
              min: 0,
              max: 700,
              values: [0, 560],
              slide: function (event, ui) {
                  $("#minamount").html("$" + ui.values[ 0 ]);
                  $("#maxamount").html("$" + ui.values[ 1 ]);
              }
          });
          $("#minamount").html("$" + $("#slider-range").slider("values", 0));
          $("#maxamount").html("$" + $("#slider-range").slider("values", 1));

      };

    /**
    * =====================================
    * wow Js
    * =====================================
    */
    var wow=new WOW( {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {}
        , scrollContainer: true // optional scroll container selector, otherwise use window
    }
    );
    wow.init();



    // Ads Popup JS
    window.onload = function (){
        $(".newsletter-popup").delay(1000).addClass('popup-visible');
    }

     $('.language').on('click',function(event){
         event.preventDefault();
         $('.language-dropdown').toggleClass('list');
         $(this).removeClass('list')
    });
    $('.loginoption').on('click', function(event){
        $('.loginarea').toggleClass('list');
        event.preventDefault();
        $('body').removeClass('list')
    });
     $('.search-i').on('click', function(){
    $('.search-cart').addClass('search-none');
  });
   $('.close-icon').on('click', function(){
    $('.search-cart').removeClass('search-none');
  });
    // Close popup
    $('.newsletter-popup').on('click', function(event){
        if( $(event.target).is('.bts-popup-close i') || $(event.target).is('.newsletter-popup') ) {
            event.preventDefault();
            $(this).removeClass('popup-visible');
        }
    });
    // Close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.newsletter-popup').removeClass('popup-visible');
        }
    });
    

});

jQuery(window).on('load', function() {
    /** =====================================
     * Preloder
     * =====================================*/
    $('.loading').fadeOut();
});


//
//
// /**********************
//  * Scroll To Top
//  ***********************/
function scrollToTop(){
    var scrollTop = $(".scroll-to-top");
    $(window).on('scroll', function() {
        var topPos = $(this).scrollTop();

        if (topPos > 200) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

}
scrollToTop();
