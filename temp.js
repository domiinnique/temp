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
  //console.log(dish)

  //1 grab the template
  const template = document.querySelector("#dishTemplate").content;

  //2 make copy
  const copy = template.cloneNode(true);
  // change some conetnt
  copy.querySelector("h3").textContent = dish.name;
   copy.querySelector("h4").textContent = dish.shortdescription;

  //append somewhere


  if (dish.discount) { //on sale
    copy.querySelector(".price-discount span").textContent = dish.price;
    const newPrice = Math.round(dish.price - dish.price * dish.discount / 100);

    copy.querySelector(".price-full span").textContent = newPrice;
    //calculate new price
    //49-49*10/100
    //dish.price-dish.price*price.discount/100
  } else { // not on discount
    copy.querySelector(".price-discount").remove()
    copy.querySelector(".price-full span").textContent = dish.price
  }



  const whoIsYourDaddy = document.querySelector("#starters")
  whoIsYourDaddy.appendChild(copy)
}
