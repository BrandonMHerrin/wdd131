import {temples} from "./temple-list.mjs"

const hamButton = document.querySelector('#nav-button');
const navMenu = document.querySelector('nav');
const categoryElement = document.querySelector("#temple-category");

const loadTempleTemplate = (temple) => `
    <article>
        <h3>${temple.templeName}</h3>
        <p><span class="title">Location:</span> <span class="detail">${temple.location}</span></p>
        <p><span class="title">Detail:</span> <span class="detail">${temple.dedicated}</span></p>
        <p><span class="title">Size:</span> <span class="detail">${temple.area}</span></p>
        <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
    </article>
`;

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
})

const calculateDedicationYear = (dateDedicated) => {
    return new Date(dateDedicated).getFullYear();
}

const renderTemples = (temples, category) => {
    const templeGallery = document.querySelector("#temple-gallery");
    templeGallery.innerHTML = "";
    temples.forEach((temple) => {
        templeGallery.innerHTML += loadTempleTemplate(temple);
    });
    hideNavMenu();
    setPageCategory(category);
}

const renderFullList = () => renderTemples(temples, "Home")

const renderOldTemples = () => {
    const oldTemples = temples.filter((temple) => {
        const dedicationYear = calculateDedicationYear(temple.dedicated);
        return dedicationYear < 1900;
    })
    renderTemples(oldTemples, "Old");
}

const renderNewTemples = () => {
    const newTemples = temples.filter((temple) => {
        const dedicationYear = calculateDedicationYear(temple.dedicated);
        return dedicationYear > 2000
    })
    renderTemples(newTemples, "New");
}

const renderLargeTemples = () => {
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    renderTemples(largeTemples, "Large")
}

const renderSmallTemples = () => {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    renderTemples(smallTemples, "Small");
}

const hideNavMenu = () => {
    const buttonStatus = hamButton.classList.contains("open");
    const navStatus = navMenu.classList.contains("open");
    if (buttonStatus && navStatus) {
      navMenu.classList.toggle("open");
      hamButton.classList.toggle("open");
    }
}

const setPageCategory = (category) => {
    categoryElement.innerHTML = category;
}

const initializeEventListeners = () => {
    const homeButton = document.querySelector("#home-button");
    const oldButton = document.querySelector("#old-button");
    const newButton = document.querySelector("#new-button");
    const largeButton = document.querySelector("#large-button");
    const smallButton = document.querySelector("#small-button");

    homeButton.addEventListener("click", () => renderFullList());
    oldButton.addEventListener("click", () => renderOldTemples());
    newButton.addEventListener("click", () => renderNewTemples());
    largeButton.addEventListener("click", () => renderLargeTemples());
    smallButton.addEventListener("click", () => renderSmallTemples());
}

const main = () => {
    renderFullList();
    initializeEventListeners();
}

main();