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
menu.addEventListener('click', () => {
  if(openmenu.classList.contains('collapse')){
    openmenu.classList.add('active')
    openmenu.classList.remove('collapse')
    return
  }
  openmenu.classList.add('collapse')
  openmenu.classList.remove('active')
})


//txt
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
   
};

// CHANGE COLOUR
let button = document.querySelector(".btn");
let bgEl = document.body;
button.addEventListener('click', () => {
    let color = '#';
    random = Math.random().toString(16).slice(2,8);
    color += random
    bgEl.style.background = color;
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