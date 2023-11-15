let buton = document.querySelector(".fa-bars")
let close = document.querySelector(".close")
let aside = document.querySelector(".aside")

buton.addEventListener("click",function () {
    aside.classList.remove("none")
})
close.addEventListener("click",function () {
    aside.classList.add("none")
})

let shop_icon = document.querySelector(".fa-bag-shopping")
let shop_icon_close = document.querySelector(".fa-xmark")
let shop_icon_aside = document.querySelector(".shop_aside")

shop_icon.addEventListener("click",function () {
    shop_icon_aside.classList.remove("active")
})
shop_icon_close.addEventListener("click",function () {
    shop_icon_aside.classList.add("active")
})


let rangeMin = 30;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(rangeInput[0].value);
      let maxRange = parseInt(rangeInput[1].value);
      if (maxRange - minRange < rangeMin) {     
        if (e.target.className === "min") {
          rangeInput[0].value = maxRange - rangeMin;        
        } else {
          rangeInput[1].value = minRange + rangeMin;        
        }
      } else {
        rangePrice[0].value = minRange;
        rangePrice[1].value = maxRange;
        range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  rangePrice.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = rangePrice[0].value;
      let maxPrice = rangePrice[1].value;
      if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 10 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 10 - (maxPrice / rangeInput[1].max) * 10 + "%";
        }
      }
    });
  });
  