// JavaScript code to handle the functionalities

document.addEventListener("DOMContentLoaded", () => {
  // Side navigation
  const sidenav = document.getElementById("mySidenav");

  window.openNav = function () {
      sidenav.style.width = "250px";
  };

  window.closeNav = function () {
      sidenav.style.width = "0";
  };

  // Image slider
  let currentSlide = 0;
  const slides = document.querySelectorAll(".image-desktop .img-p");
  const totalSlides = slides.length;

  document.getElementById("prev-btn").addEventListener("click", () => {
      changeSlide(-1);
  });

  document.getElementById("next-btn").addEventListener("click", () => {
      changeSlide(1);
  });

  function changeSlide(direction) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
      slides[currentSlide].classList.add("active");
  }

  // Quantity controls
  const quantityElement = document.getElementById("quantity");
  let quantity = parseInt(quantityElement.textContent);

  document.getElementById("plus-btn").addEventListener("click", () => {
      quantity++;
      quantityElement.textContent = quantity;
  });

  document.getElementById("minus-btn").addEventListener("click", () => {
      if (quantity > 1) {
          quantity--;
          quantityElement.textContent = quantity;
      }
  });

  // Add to cart
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
      const cartContainer = document.getElementById("cart-container");
      cartContainer.innerHTML = `
          <div class="cart-item">
              <img src="./images/image-product-1-thumbnail.jpg" alt="Product Thumbnail">
              <div class="item-details">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>$125.00 x ${quantity} <strong>$${125 * quantity}.00</strong></p>
              </div>
              <img src="./images/icon-delete.svg" alt="Delete" class="delete-btn">
          </div>
      `;
  });
});



let plusBtn = document.getElementById('plus-btn');
let minusBtn = document.getElementById('minus-btn');
let quantity = document.getElementById('quantity');


plusBtn.addEventListener('click', () => {


    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;

});

minusBtn.addEventListener('click', () => {

  quantity.innerHTML = parseInt(quantity.innerHTML) - 1;


  if (quantity.innerHTML < 1) {
    quantity.innerHTML = 0;
  }

}
)

// function  of selected image 

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let principalImg = document.getElementById('main_image');

img1.addEventListener('click', () => {
  principalImg.src = img1.src;
}
)

img2.addEventListener('click', () => {
  principalImg.src = img2.src;
}
)

img3.addEventListener('click', () => {
  principalImg.src = img3.src;
}
)

img4.addEventListener('click', () => {
  principalImg.src = img4.src;
}
)





let shoopingCart = document.querySelector('.cart_container');
let shop = document.querySelector('.cart')


shop.addEventListener('click', () => {
  
    shoopingCart.style.display = 'flex';

    // close cart when click on shop or outside 

    document.addEventListener('click', (e) => {
      if (e.target !== shop) {
        shoopingCart.style.display = 'none';
      }
    })

  }

)


// function to add number of items to cart

let order = document.getElementById('add-to-cart-btn');

order.addEventListener('click', () => {

  let incrementBTn =document.querySelector('.number_of_orders');

  // increment 
  incrementBTn.innerHTML = parseInt(incrementBTn.innerHTML) + 1

  //store data in table and display in shopping cart

  let store = []

  let price = document.getElementById('price_product').textContent;
  let title = document.getElementById('titre_produit').textContent;
  let quantity = document.getElementById('quantity').textContent;
  let img = document.getElementById('main_image')

  store.push({
    title: title,
    price: price,
    quantity: quantity,
    img: img.src
  })
  console.log(store);

  // display in shopping cart

//   <div class="cart_container">
//   <div class="header_cart">
//       <p>Cart</p>
//   </div>
//   <div class="info">
//       <img src="./images/image-product-1.jpg" alt="">
//       <div class="info_text">
//           <p>Fall Limited Edition Sneakers</p>
//           <div class="price">
//               <p>$125.00 x </p>
//               <p>1 = </p>
//               <p>$125.00</p>
//           </div>
          
//       </div>
//       <i class="far fa-trash-alt"></i>


//   </div>
//   <button class="checkout">Checkout</button>
// </div>

 let container = document.querySelector('#box');

 let cart= document.querySelector('.cart_container');

 cart.innerHTML = `
  <div class="header_cart">
      <p>Cart</p>
  </div>
  <div class="info">
      <img src="${store[0].img}" alt="">
      <div class="info_text">
          <p>${store[0].title}</p>
          <div class="price">
              <p>$${store[0].price} x </p>
              <p>${store[0].quantity} = </p>
              <p>$${store[0].price * store[0].quantity}.00</p>
          </div>
          
      </div>
      <i class="far fa-trash-alt"></i>
      </div>
      <button class="checkout">Checkout</button>
  `
  container.appendChild(cart);












 













}
)

















