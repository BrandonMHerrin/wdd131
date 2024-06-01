import renderMenuItems from "./partials/header.js";
import { loadCurrentYear } from "./utils.mjs";

const main = () => {
    loadCurrentYear();
    renderMenuItems();
}



main();