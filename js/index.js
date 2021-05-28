// Carousel silder
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow
window.addEventListener("load",function() {
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, 4000);
})


// CounterUp
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});


// Modal Popup
// Cách 1
// $(document).ready(function(){
//   $('.popup-open').click(function(event){
//     $('.modal-body').add(active);
//     $('.background-opacity').add(active);
//   });
//   $('.popup-close').click(function(event){
//     $('.modal-body').removeClass(active);
//     $('.background-opacity').removeClass(active);
//   });
// });
// Cách 2
// document.getElementsByClassName("popup-open").addEventListener("click",function(){
//   document.getElementsByClassName("modal-body")[0].classList.add("active");  
//   document.getElementsByClassName("background-opacity")[0].classList.add("active");  
// });
// document.getElementsByClassName("popup-close").addEventListener("click",function(){
//   document.getElementsByClassName("modal-body")[0].classList.remove("active");
// });
// Cách 3
// const open = document.getElementsByClassName('.popup-open');
// const body = document.getElementsByClassName('.modal-body');
// const background = document.getElementsByClassName('.background-opacity');
// const close = document.getElementsByClassName('.popup-close');
// open.addEventListener('click', () => {
//   body.classList.add('active');
//   background.classList.add('active');
// });
// close.addEventListener('click', () => {
//   body.classList.add('active');
//   background.classList.remove('active');
// });


// Smooth scroll to specific div on click
$(".ab").click(function() {
  $('html,body').animate({
      scrollTop: $(".about").offset().top},
      'slow');
});
$(".bl").click(function() {
  $('html,body').animate({
      scrollTop: $(".blog").offset().top},
      'slow');
});
$(".po").click(function() {
  $('html,body').animate({
      scrollTop: $(".portfolio").offset().top},
      'slow');
});
$(".ag").click(function() {
  $('html,body').animate({
      scrollTop: $(".agents").offset().top},
      'slow');
});
$(".co").click(function() {
  $('html,body').animate({
      scrollTop: $(".contact").offset().top},
      'slow');
});
$(".scrollup").click(function() {
  $('html,body').animate({
      scrollTop: $(".carousel").offset().top},
      'slow');
});

