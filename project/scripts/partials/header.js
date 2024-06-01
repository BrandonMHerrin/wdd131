const navMenuButton = document.querySelector(".nav-menu-button");
const headerNav = document.querySelector("header nav");
const header = document.querySelector("header");
let navMenuOpen = false;
const navMenuIcon = header.querySelector(
  ".nav-menu-button .material-symbols-outlined"
);

const headerTemplate = ({ href, icon, text }) => `
    <a href="${href}">
        <span class="material-symbols-outlined">
            ${icon}
        </span>
        ${text}
    </a>
`;

const menuItems = [
  { href: "./services.html", icon: "category", text: "Services" },
  { href: "./booknow.html", icon: "camping", text: "Book Now" },
];

const nav = document.querySelector("header nav");

const initializeNavMenuButtonListener = () => {
  navMenuButton.addEventListener("click", () => {
    headerNav.classList.toggle("hide");
    header.classList.toggle("secondary-bg");
    navMenuOpen = !navMenuOpen;
    if (navMenuOpen) navMenuIcon.textContent = "close";
    else navMenuIcon.textContent = "menu";
  });
};

const initializeEventListeners = () => {
  initializeNavMenuButtonListener();
};

export default function renderMenuItems() {
  const navElements = menuItems.map((item) => headerTemplate(item)).join("");
  nav.insertAdjacentHTML("afterbegin", navElements);
  initializeEventListeners();
}
