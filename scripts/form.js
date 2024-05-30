const now = new Date();
const submissionCountKey = "submission-key";

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const main = () => {
    document.querySelector("#current-year").textContent = now.getFullYear();
    document.querySelector("#last-modified").textContent = document.lastModified;
    const pathNameArray = window.location.pathname.split("/");
    const page = pathNameArray[pathNameArray.length - 1];
    if (page === "form.html")
        loadSelectOptions();
    else if (page === "/review.html");
        handleReviewSubmission();
}

const loadSelectOptions = () => {
    const productNameSelect = document.querySelector("#product-name");
    products.forEach(product => {
        productNameSelect.append(generateProductTemplate(product));
    });
}
const generateProductTemplate = (product) => {
    const productElement = document.createElement("option");
    productElement.setAttribute("value", product.id);
    productElement.textContent = capatelizeWords(product.name);
    return productElement;
} 

const capatelizeWords = (text) => {
    let words = text.split(" ");
    words = words.map((word) => word[0].toUpperCase() + word.slice(1));
    return words.join(" ");
}

const handleReviewSubmission = () => {
    let submissionCount = parseInt(localStorage.getItem(submissionCountKey));
    if (!submissionCount) {
        submissionCount = 1;
    } else {
        submissionCount++;
    }
    localStorage.setItem(submissionCountKey, submissionCount);
}

main();