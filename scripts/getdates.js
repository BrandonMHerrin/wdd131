// Get the current year and last modified date and updates the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;
