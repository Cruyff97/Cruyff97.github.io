//animation menu open
let navicon = document.getElementById('navbar-icon');

navicon.addEventListener('click', () => {
  if(navicon.classList.contains('open')){
    navicon.classList.remove('open')
    return
  }
  navicon.classList.add('open')
  
})
//openmenu
let menu = document.getElementById('navbar-toggler');
let openmenu = document.getElementById('navbarSupportedContent');
console.log("menu->", menu)
console.log("openmenu->", openmenu[0])
menu.addEventListener('click', () => {
  console.log("aaaa")
  if(openmenu.classList.contains('collapse')){
    openmenu.classList.add('active')
    openmenu.classList.remove('collapse')
    return
  }
  openmenu.classList.add('collapse')
  openmenu.classList.remove('active')
})
// //cursor
// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable'); 

// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);

// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// } // Move the cursor


// function onMouseMove(e) {
//   TweenMax.to($bigBall, .4, {
//     x: e.pageX - 15,
//     y: e.pageY - 15
//   });
//   TweenMax.to($smallBall, .1, {
//     x: e.pageX - 5,
//     y: e.pageY - 7
//   });
// } // Hover an element


// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 4
//   });
// }

// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1
//   });
// }
//active class
var btns = 
          $(" .navbar-nav .nav-link");

      for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click",
                                function () {
              var current = document
                  .getElementsByClassName("active");

              current[0].className = current[0]
                  .className.replace(" active", "");

              this.className += " active";
          });
      }

      //CAROUSEL
    
//       $num = $('.my-card').length;
// $even = $num / 2;
// $odd = ($num + 1) / 2;

// if ($num % 2 == 0) {
//   $('.my-card:nth-child(' + $even + ')').addClass('active');
//   $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
//   $('.my-card:nth-child(' + $even + ')').next().addClass('next');
// } else {
//   $('.my-card:nth-child(' + $odd + ')').addClass('active');
//   $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
//   $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
// }

// $('.my-card').click(function() {
//   $slide = $('.active').width();
//   console.log($('.active').position().left);
  
//   if ($(this).hasClass('next')) {
//     $('.card-carousel').stop(false, true).animate({left: '-=4' + $slide});
//   } else if ($(this).hasClass('prev')) {
//     $('.card-carousel').stop(false, true).animate({left: '+=4' + $slide});
//   }
  
//   $(this).removeClass('prev next');
//   $(this).siblings().removeClass('prev active next');
  
//   $(this).addClass('active');
//   $(this).prev().addClass('prev');
//   $(this).next().addClass('next');
// });


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});


//add hide navbar
$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
  
});
//FORM VALIDATION
