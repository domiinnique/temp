







fetch("https://kea-alt-del.dk/t5/api/categories")
  .then(res => res.json())
  .then(createCategories)

function createCategories(data) {
  console.log(data)
  data.forEach(function (oneCat) {

    const section = document.createElement("section");
    section.id = oneCat;
    const h2 = document.createElement("h2");
    h2.textContent = oneCat;
    section.appendChild(h2);

    document.querySelector("main").appendChild(section);
 })
 getProducts();
}



function getProducts() {
    fetch("https://kea-alt-del.dk/t5/api/productlist")
     .then(function (response) {
      return response.json()
    })
    .then(function (data) {
    showData(data)
    })
}

function showData(jsonData) {
  console.log(jsonData)
  jsonData.forEach(showSingleDish)
}

function showSingleDish(dish) {

  const template = document.querySelector("#dishTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = dish.name;
  copy.querySelector("h4").textContent = dish.shortdescription;


   const imageName = dish.image; // this would be dynamic
   const base = "https://kea-alt-del.dk/t5/site/imgs/";
    const smallImg = base + "small/" + imageName + "-sm.jpg";
    const mediumImg = base + "medium/" + imageName + "-md.jpg";
    const largeImg = base + "large/" + imageName + ".jpg";

    copy.querySelector("img").src = mediumImg;


  if (dish.discount) {
    copy.querySelector(".price-discount span").textContent = dish.price;
    const newPrice = Math.round(dish.price - dish.price * dish.discount / 100);
    copy.querySelector(".price-full span").textContent = newPrice;

  } else {
    copy.querySelector(".price-discount").remove()
    copy.querySelector(".price-full span").textContent = dish.price
  }



    console.log(`#${dish.category}`)
    document.querySelector(`#${dish.category}`).appendChild(copy);
//    const whoIsYourDaddy = document.querySelector("#starters")
//    whoIsYourDaddy.appendChild(copy)

}

