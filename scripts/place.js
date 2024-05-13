// Get the current year and last modified date and updates the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;
document.getElementById("lastModified").innerText = document.lastModified;

const temperature = parseFloat(document.getElementById("temp-value").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windChillValue = document.getElementById("windc-value");
const windChillUom = document.getElementById("windc-uom");

function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * T -
    11.37 * Math.pow(V, 0.16) +
    0.3965 * T * Math.pow(V, 0.16)
  );
}

if (temperature <= 10 && wind > 4.8) {
    const windChill = calculateWindChill(temperature, wind);
    windChillValue.textContent = windChill;
    windChillUom.textContent = "km/h";
} else {
    windChillValue.textContent = "N/A";
}