const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-container");
const overlay = document.querySelector(".overlay")

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    })
})

overlay.addEventListener("click",() => {
    navBar.classList.remove("open");
})