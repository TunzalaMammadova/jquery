"use strict"

let closeIcon = document.querySelector(".close");
let openIcon = document.querySelector(".open");
let sidebar = document.querySelector(".sidebar")


openIcon.addEventListener("click", function () {
    this.classList.add("d-none");
    sidebar.classList.remove("close-sidebar");
    closeIcon.classList.remove("d-none");
})

closeIcon.addEventListener("click", function () {
    this.classList.add("d-none");
    sidebar.classList.add("close-sidebar");
    openIcon.classList.remove("d-none");
})

