fetch("https://kea-alt-del.dk/t5/api/productlist")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    showData(data)
  })

function showData(jsonData) {
  jsonData.forEach(showSingleDish)
}

function showSingleDish(dish) {

  const template = document.querySelector("#dishTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = dish.name;
   copy.querySelector("h4").textContent = dish.shortdescription;


  if (dish.discount) {
    copy.querySelector(".price-discount span").textContent = dish.price;
    const newPrice = Math.round(dish.price - dish.price * dish.discount / 100);
    copy.querySelector(".price-full span").textContent = newPrice;

  } else {
    copy.querySelector(".price-discount").remove()
    copy.querySelector(".price-full span").textContent = dish.price
  }

 const imageName = "cola"; // this would be dynamic
    const base = "https://kea-alt-del.dk/t5/site/imgs/";
    const mediumImg = base + "medium/" + imageName + "-md.jpg";




    const whoIsYourDaddy = document.querySelector("#starters")
    whoIsYourDaddy.appendChild(copy)
}

