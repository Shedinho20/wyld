const menu = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");
const nav = document.getElementById("nav");

menu.addEventListener("click", e => {
    setTimeout(() => {
        nav.classList.toggle("open");
    }, 0.3);
    menu.classList.toggle("open");
    menuContent.classList.toggle("open");
});
