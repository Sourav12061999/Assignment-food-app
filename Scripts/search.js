import Fetch from "../Utilities/Fetching.js";
import { Navbar, searchresult, Debouncing } from "../Components/navbar.js";
let nav = document.getElementById("nav");
nav.innerHTML = Navbar();
let search = document.getElementById("search");
let result = document.getElementById("result");
search.addEventListener("input", () => {
  result.style.display = "block";
  Debouncing(search.value, Fetch, result, searchresult);
});
let data = JSON.parse(localStorage.getItem("food-app"));
let title = document.getElementById("title");
let aurthor = document.getElementById("aurthor");
let desc = document.getElementById("desc");
let next = document.getElementById("next");
let img = document.getElementById("img");

function DOM(data) {
  title.innerText = data.strMeal;
  aurthor.textContent = "Area:- " + data.strArea;
  desc.textContent = data.strInstructions;
  next.addEventListener("click", () => {
    window.location.href = data.strYoutube;
  });
  img.style.background = `url(${data.strMealThumb})`;
  img.style.backgroundSize = "cover";

  console.log(data);
}
DOM(data);
