import renderMenuItems from "./partials/header.js";
import { loadCurrentYear } from "./utils.mjs";

const pickupDate = document.querySelector("#pickup-date");
const returnDate = document.querySelector("#return-date");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");

const now = new Date().toISOString().split("T");
const currentDate = now[0];

pickupDate.min = currentDate;

const initializeEventListeners = () => {
    initializePickupEvents();
    initializeReturnEvents();
    initializeSubmitEvent();
}

const initializePickupEvents = () => {
    pickupDate.addEventListener("change", () => {
        const minReturnDate = new Date(pickupDate.value);
        minReturnDate.setDate(minReturnDate.getDate() + 2);
        const minReturnIso = minReturnDate.toISOString().split("T");
        returnDate.min = minReturnIso[0];
    });
}

const initializeReturnEvents = () => {
    returnDate.addEventListener("change", () => {
        const maxPickupDate = new Date(returnDate.value);
        maxPickupDate.setDate(maxPickupDate.getDate() - 2);
        const maxPickupIso = maxPickupDate.toISOString().split("T");
        pickupDate.max = maxPickupIso[0];
    });
}

const initializeSubmitEvent = () => {
    form.addEventListener("submit", () => {
        const formValues = {
          fName: form.querySelector("#fname").value,
          lName: form.querySelector("#lname").value,
          email: form.querySelector("#email").value,
          pickUpDate: form.querySelector("#pickup-date").value,
          returnDate: form.querySelector("#return-date").value,
          park: form.querySelector("#park").value,
          delivery: form.querySelector("#delivery").checked,
          catering: form.querySelector("#catering").checked,
          setup: form.querySelector("#setup").checked
        };
        localStorage.setItem("form-result", JSON.stringify(formValues));
    })
}

const main = () => {
    loadCurrentYear();
    initializeEventListeners();
    renderMenuItems();
}

main();