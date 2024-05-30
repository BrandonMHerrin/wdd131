import { loadCurrentYear } from "./utils.mjs";

const navMenuButton = document.querySelector(".nav-menu-button");
const headerNav = document.querySelector("header nav");
const header = document.querySelector("header");
let navMenuOpen = false;
const navMenuIcon = header.querySelector(".nav-menu-button .material-symbols-outlined")


const main = () => {
    loadCurrentYear();
    initializeEventListeners();
}

const initializeEventListeners = () => {
    initializeNavMenuButtonListener();
}

const initializeNavMenuButtonListener = () => {
    navMenuButton.addEventListener("click", () => {
        headerNav.classList.toggle("hide");
        header.classList.toggle("secondary-bg");
        navMenuOpen = !navMenuOpen;
        if (navMenuOpen) navMenuIcon.textContent = "close";
        else navMenuIcon.textContent = "menu";
    })
}

main();