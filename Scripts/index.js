import Fetch from "../Utilities/Fetching.js";
import { Navbar, searchresult, Debouncing } from "../Components/navbar.js";
import DOM from "../Utilities/DOM.js";
let nav = document.getElementById("nav");
nav.innerHTML = Navbar();
let search = document.getElementById("search");
let result = document.getElementById("result");
let latest = document.getElementById("latest");
search.addEventListener("input", () => {
  result.style.display = "block";
  Debouncing(search.value, Fetch, result, searchresult);
});
Fetch(`https://themealdb.com/api/json/v1/1/search.php?s=b`).then((data) => {
  DOM(data.meals, latest);
});
