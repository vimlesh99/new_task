var addClassScrolle = document.querySelector(".navbar");

window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        addClassScrolle.classList.add("header-scrolled")
    }else{
        addClassScrolle.classList.remove("header-scrolled")
    }
}

let allHeadnav =document.querySelectorAll(".nav-link");
let removeShow =document.querySelector(" .navbar .navbar-collapse");

allHeadnav.forEach((a)=>{
  a.addEventListener("click", function(){
    removeShow.classList.remove("show");
  })
})




// owl carousel

$(".owl-carousel").owlCarousel({
    item: 4,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });