// show anh hiden form search:
(function () {
    document.querySelector('#search-btn').addEventListener('click', function (event) {
        event.preventDefault();
        let formSearch = document.querySelector('#searchForm');
        if (formSearch) {
            formSearch.style.opacity = 1;
            formSearch.style.zIndex = 100;
            formSearch.style.top = 0;
        }
    });
    document.querySelector('#form-search-exit').addEventListener('click', function (event) {
        event.preventDefault();
        let formSearch = document.querySelector('#searchForm');
        if (formSearch) {
            formSearch.style.opacity = 0;
            formSearch.style.zIndex = -5;
            formSearch.style.top = '-70px';
        }
    });

})();



let slides = document.getElementsByClassName("slider-item");
let dots = document.getElementsByClassName("current-index");
let slideCounter = 1;
slidesFun(slideCounter);

let slideTimer = setInterval(autoSlide, 10000);
function autoSlide() {
    slideCounter += 1;
    slidesFun(slideCounter);
}
function plusSlide(n) {
    slideCounter += n;
    slidesFun(slideCounter);
    resetTimer();
}
function currentSlide(n) {
    slideCounter = n;
    slidesFun(slideCounter);
    resetTimer();
}
function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(autoSlide, 10000)
}


function slidesFun(n) {
    let i;
    if (n > slides.length) { slideCounter = 1 }
    if (n < 1) { slideCounter = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slider-item--active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current--active", "");
    }
    slides[slideCounter - 1].classList.add("slider-item--active");
    dots[slideCounter - 1].classList.add("current--active");

}


//
let slideAboutUs = document.getElementsByClassName("about-us-slider-item");
let dotsAboutUs = document.getElementsByClassName("about-us-slider-index");
let slideCounterAboutUs = 1;
slidesFunAboutUs(slideCounterAboutUs);

let slideAboutUsTimer = setInterval(autoSlideAboutUs, 5000);
function autoSlideAboutUs() {
    slideCounterAboutUs += 1;
    slidesFunAboutUs(slideCounterAboutUs);
}
function plusSlideAboutUs(n) {
    slideCounterAboutUs += n;
    slidesFunAboutUs(slideCounterAboutUs);
    resetTimerAboutUs();
}
function currentSlideAboutUs(n) {
    slideCounterAboutUs = n;
    slidesFunAboutUs(slideCounterAboutUs);
    resetTimerAboutUs();
    console.log(n)
}
function resetTimerAboutUs() {
    clearInterval(slideAboutUsTimer);
    slideAboutUsTimer = setInterval(autoSlideAboutUs, 5000)
}


function slidesFunAboutUs(n) {
    let i;
    if (n > slideAboutUs.length) { slideCounterAboutUs = 1 }
    if (n < 1) { slideCounterAboutUs = slideAboutUs.length }
    for (i = 0; i < slideAboutUs.length; i++) {
        slideAboutUs[i].classList.remove("about-us-slider-item--active");
    }
    for (i = 0; i < dotsAboutUs.length; i++) {
        dotsAboutUs[i].className = dotsAboutUs[i].className.replace(" about-us-current--active", "");
    }
    slideAboutUs[slideCounterAboutUs - 1].classList.add("about-us-slider-item--active");
    dotsAboutUs[slideCounterAboutUs - 1].classList.add("about-us-current--active");

}

// window.addEventListener("scroll", function () {
//     let headerElement = this.document.querySelector('header');
//     a = window.scrollY
//     headerElement.classList.toggle("header-sticky", window.scrollY > 0)
// })

//let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let headerElement = this.document.querySelector('header');
    let reveals = document.querySelectorAll('.reveal');
    //let backToTop = document.querySelector('.back-top-top');
    // backToTop.classList.toggle("back-to-top-visible", window.scrollY > 0)
    headerElement.classList.toggle("header-sticky", window.scrollY > 0)
    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('reveal--active');
        }
        else{
          reveals[i].classList.remove('reveal--active');
        }
      }

});


//Get the button
let backToTop = document.querySelector('.back-to-top');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
document.querySelector('.back-to-top').addEventListener('click',function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

// window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....

//     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     if (st > lastScrollTop) {
//         headerElement.classList.add("header-sticky")

//     } else {
//         headerElement.classList.remove("header-sticky")
//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);

// ////////////////////////////////////////////////


