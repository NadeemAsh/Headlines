// Grab elements

// Custom Function to select elements without breaking from the DOM
const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly`)
}

//Nav styles on scroll

// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper