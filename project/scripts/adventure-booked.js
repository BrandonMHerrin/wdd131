import renderMenuItems from "./partials/header";
import { loadCurrentYear } from "./utils.mjs"

const main = () => {
    loadCurrentYear();
    renderMenuItems();
}

main();