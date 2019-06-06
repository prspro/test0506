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
  });
});
