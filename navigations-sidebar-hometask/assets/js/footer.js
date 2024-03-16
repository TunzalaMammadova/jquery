"use strict";

let sidebar = document.querySelector(".sidebar");
let closeIcon = document.querySelector(".close");
let openIcon = document.querySelector(".open");

openIcon.addEventListener("click",function(){
    sidebar.classList.remove("close-sidebar");
    closeIcon.classList.remove("d-none");
    this.classList.add("d-none");
})


closeIcon.addEventListener("click",function(){
    sidebar.classList.add("close-sidebar");
    this.classList.add("d-none");
    openIcon.classList.remove("d-none");
})