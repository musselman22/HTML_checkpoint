import {updatePosters} from './source.js';

let searchButton = null;
let searchTextBox = null;

document.addEventListener("DOMContentLoaded", function() {
    searchButton = document.querySelector(".search-btn");
    searchTextBox = document.querySelector(".search-box");
    searchButton.addEventListener("click", updatePosters, searchTextBox.textContent);
});