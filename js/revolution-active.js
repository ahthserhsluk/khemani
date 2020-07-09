"use strict";

var tpj=jQuery;
var revapi477;

tpj(document).ready(function() {
    $(".rev_slider").each(function(index) {
        var rev_slider = $(this); //check this block
        if (tpj(this).revolution == undefined) {
            revslider_showDoubleJqueryError(this);
        } else {
            revapi477 = tpj(this).show().revolution({
                sliderType: "standard",
                jsFileLocation:"js/vendor/revolution",
                // jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                sliderLayout: "auto",
                dottedOverlay: "none",
                delay: 9000,
                startwidth:1200,
                startheight:725,
                minHeight:"50",
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "off",
                        swipe_threshold: 75,
                        swipe_min_touches: 50,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        enable: true,
                        style: 'persephone',
                    },
                    bullets: {
                        enable: false,
                        hide_onmobile: false,
                        style: "hermes",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 30,
                        v_offset: 0,
                        space: 10,
                        tmp: ''
                    },
                    thumbnails: {
                        style: "gyges",
                        enable: false,
                        width: 60,
                        height: 60,
                        min_width: 60,
                        wrapper_padding: 10,
                        wrapper_color: "",
                        wrapper_opacity: "0",
                        tmp: '<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
                        visibleAmount: 0,
                        hide_onmobile: false,
                        hide_onleave: false,
                        direction: "vertical",
                        span: true,
                        position: "inner",
                        space: 5,
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [910, 600, 560, 500],
                lazyType: "single",
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "on",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });
});	/*ready*/
