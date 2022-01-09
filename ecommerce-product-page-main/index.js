let slides = document.getElementsByClassName("center");
let menu = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".sidebar");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
let quantity = document.querySelector(".number");
let btnPlus = document.querySelector(".btn-plus");
let btnMinus = document.querySelector(".btn-minus");
let cartContainer = document.querySelector(".cart-container")




// Slider

function showSlides(n) {
//   console.log("showSlides");
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// initialiser le premier slide
let slideIndex = 1;
function currentSlide(n) {
  showSlides((slideIndex = n));
}
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
console.log(btnLeft);
// console.log(btnRight);
btnLeft.addEventListener("click", function () {
    console.log("click");
  plusSlides(-1);
});
btnRight.addEventListener("click", function () {
    console.log("click");
  plusSlides(1);
});

// add quantity
btnPlus.addEventListener("click", function () {
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    }
);
btnMinus.addEventListener("click", function () {
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
    if (quantity.innerHTML <= 0) {
        quantity.innerHTML = 1;
    }
});
const img = document.querySelector(".img-slid");
// console.log(img);

// add to cart
let addToCart = document.querySelector(".add-to-cart");
addToCart.addEventListener("click", function () {
    let cart = document.querySelector(".cart");
    cartContainer.style.display = "block";
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
    <div class="title">
        <h3>Cart</h3>
    </div>
    <div class="cart-item-img">
    <img src="http://127.0.0.1:5500/images/image-product-3.jpg" alt="">
    <div class="item-info">
        <h3>Product 1</h3>
        <p>$1.99</p>
        <p>Quantity: ${quantity.innerHTML}</p>
    </div>
    </div>
    <button class="checkout">Checkout</button>
    `;
    cart.appendChild(cartItem);
});