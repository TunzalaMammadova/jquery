// "use strict"

// let home = document.querySelector(".home-page");
// let about = document.querySelector(".about-page");
// let product = document.querySelector(".product-page");
// let service = document.querySelector(".service-page");
// let contact = document.querySelector(".contact-page");

// let homelist = document.querySelector(".home");
// let aboutlist = document.querySelector(".about");
// let productlist = document.querySelector(".product");
// let servicelist = document.querySelector(".service");
// let contactlist = document.querySelector(".contact-list");




// home.addEventListener("mouseover", function () {
//     homelist.classList.remove("d-none");
//     aboutlist.classList.add("d-none");
//     productlist.classList.add("d-none");
//     servicelist.classList.add("d-none");
//     contactlist.classList.add("d-none");

// })

// about.addEventListener("mouseover", function () {
//     aboutlist.classList.remove("d-none");
//     homelist.classList.add("d-none");
//     productlist.classList.add("d-none");
//     servicelist.classList.add("d-none");
//     contactlist.classList.add("d-none");

// })

// product.addEventListener("mouseover", function () {
//     productlist.classList.remove("d-none");
//     aboutlist.classList.add("d-none");
//     homelist.classList.add("d-none");
//     servicelist.classList.add("d-none");
//     contactlist.classList.add("d-none");

// })

// service.addEventListener("mouseover", function () {
//     servicelist.classList.remove("d-none");
//     productlist.classList.add("d-none");
//     aboutlist.classList.add("d-none");
//     homelist.classList.add("d-none");
//     contactlist.classList.add("d-none");

// })

// contact.addEventListener("mouseover", function () {
//     contactlist.classList.remove("d-none");
//     servicelist.classList.add("d-none");
//     productlist.classList.add("d-none");
//     aboutlist.classList.add("d-none");
//     homelist.classList.add("d-none");


// })


$(document).ready(function(){
  $(".home-page").mouseover(function(){
    $(".home").removeClass("d-none");
    $(".product").addClass("d-none");
    $(".service").addClass("d-none");
    $(".contact-list").addClass("d-none");
    $(".about").addClass("d-none");
  });
});


$(document).ready(function(){
  $(".about-page").mouseover(function(){
    $(".home").addClass("d-none");
    $(".product").addClass("d-none");
    $(".service").addClass("d-none");
    $(".contact-list").addClass("d-none");
    $(".about").removeClass("d-none");
  });
});


$(document).ready(function(){
  $(".product-page").mouseover(function(){
    $(".home").addClass("d-none");
    $(".product").removeClass("d-none");
    $(".service").addClass("d-none");
    $(".contact-list").addClass("d-none");
    $(".about").addClass("d-none");
  });
});


$(document).ready(function(){
  $(".service-page").mouseover(function(){
    $(".home").addClass("d-none");
    $(".product").addClass("d-none");
    $(".service").removeClass("d-none");
    $(".contact-list").addClass("d-none");
    $(".about").addClass("d-none");
  });
});


$(document).ready(function(){
  $(".contact-page").mouseover(function(){
    $(".home").addClass("d-none");
    $(".product").addClass("d-none");
    $(".service").addClass("d-none");
    $(".contact-list").removeClass("d-none");
    $(".about").addClass("d-none");
  });
});


$(document).ready(function(){
  $(".home-page").mouseout(function(){
    $(".home").addClass("d-none");
  });
});


$(document).ready(function(){
  $(".about-page").mouseout(function(){
    $(".about").addClass("d-none");
  });
});

$(document).ready(function(){
  $(".service-page").mouseout(function(){
    $(".service").addClass("d-none");
  });
});


$(document).ready(function(){
  $(".product-page").mouseout(function(){
    $(".product").addClass("d-none");
  });
});


$(document).ready(function(){
  $(".contact-page").mouseout(function(){
    $(".contact-list").addClass("d-none");
  });
});
