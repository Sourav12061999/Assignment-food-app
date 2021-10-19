function Navbar() {
  let htmlElement = `<div class="logo"><img src="./istockphoto-1255140174-1024x1024.jpg" alt=""></div>
 <div class="navigation">
     <ul>
     <li><a href="/">Home</a></li>
         <li><a href="./Latest.html">Latest Receipe</a></li>
         <li><a href="./Day.html">Receipe of the day</a></li>
     </ul>
 </div>
 <div class="search">
     <input id="search" type="text">
     <div id="result"></div>
 </div>`;
  return htmlElement;
}
function searchresult(data, result) {
  result.innerHTML = null;
  data.forEach((element) => {
    let div = document.createElement("div");
    let img = document.createElement("div");
    img.style.background = `url(${element.strMealThumb})`;
    if (element.strMealThumb == null || element.strMealThumb == undefined) {
      img.style.background = `url(no.png)`;
    }
    img.style.backgroundSize = "cover";
    div.appendChild(img);
    let text = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = element.strMeal;
    text.appendChild(p);
    div.appendChild(text);
    div.addEventListener("click", () => {
      result.style.display = "none";
      localStorage.setItem("food-app", JSON.stringify(element));
      window.location.href = "search.html";
    });
    result.appendChild(div);
  });
}
function Debouncing(query, Fetch, result, searchresult) {
  let interval;
  function DataFetch(query, Fetch) {
    clearTimeout(interval);
    interval = setTimeout(() => {
      Fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`).then(
        (data) => {
          console.log(data);
          searchresult(data.meals, result);
        }
      );
    }, 1000);
  }
  DataFetch(query, Fetch);
}
export { Navbar, searchresult, Debouncing };
