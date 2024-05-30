export const loadCurrentYear = () => {
    const footerYear = document.querySelector(".current-year");
    footerYear.textContent = new Date().getFullYear();
}