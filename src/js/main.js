// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";

$(function() {
  objectFitImages();
});

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    dots: true,
    dotsClass: 'custom-dots',
    arrows: true,
    prevArrow: '<div class="arrow arrow--left"></div>',
    nextArrow: '<div class="arrow arrow--right"></div>',
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]  
  });


 function ButtonSwitch(btns, btn, cls) {
  btns.removeClass(cls);
  btn.addClass(cls);
 }

 const lng_btns = $('.language .switch-btn');
 const curr_btns = $('.currency .switch-btn');
 const cls_selected = 'switch-btn--selected';
 
  lng_btns.on('click', function() {
    ButtonSwitch(lng_btns, $(this), cls_selected);
  })
  curr_btns.on('click', function() {
    ButtonSwitch(curr_btns, $(this), cls_selected);
  })
});

$(document).on("click", function(e) {
  const id = e.target.id;
  const overlay = $("#js_overlay");
  if (id === "js_overlay" || id === "js_popup-close" || id === "js_login" || id === "js_acc") {
      overlay.fadeToggle();
  }
});