const menu = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");
const nav = document.getElementById("nav");
const li = document.getElementById("click");
menu.addEventListener("click", e => {
    setTimeout(() => {
        nav.classList.toggle("open");
    }, 0.1);
    menu.classList.toggle("open");
    menuContent.classList.toggle("open");
});

li.addEventListener()