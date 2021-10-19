function DOM(data, latest) {
  latest.innerHTML = null;
  data.forEach((element) => {
    let img = document.createElement("div");
    img.style.background = `url(${element.strMealThumb})`;
    if (element.strMealThumb == null || element.strMealThumb == undefined) {
      img.style.background = `url(no.png)`;
    }
    img.style.backgroundSize = "cover";
    latest.appendChild(img);
  });
}
export default DOM;
