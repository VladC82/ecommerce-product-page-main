const mobileMenu = document.getElementById("mobilemenu");
const navMenu = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const cartDiv = document.getElementById("cartdiv");
const modal = document.getElementById("modal");

// cart and checkout buttons added
const checkOutBtn = document.getElementById("checkout");
const addToCart = document.getElementById("addtocart");
const price = document.getElementById("price");
const total = document.getElementById("total");

//messages
const orderNumber = document.getElementsByClassName("cartnumber");
const cartMessages = document.getElementById("cartmodal");
const emptyCartMsg = document.getElementById("emptymessage");

//icons
const substractItem = document.getElementById("substract");
const addItem = document.getElementById("add");
const cartIcon = document.getElementById("cart");
const delBtn = document.getElementById("delete");
const cancelBtn = document.getElementById("cancel");

//for mobile menu
function Mobilemenu(params) {
  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  cartMessages.classList.add("hidden");
  controlCarousel.classList.remove("visible");
  controlCarousel.classList.add("lg:hidden");
}
mobileMenu.addEventListener("click", Mobilemenu);
overlay.addEventListener("click", Mobilemenu);
cancelBtn.addEventListener("click", Mobilemenu);

console.log(orderNumber);

//FUNCTIONALITY FOR ADDING COUNT, three spans having same class
let count = 0;
function handlerAdd(params) {
  let [a, b, c] = orderNumber;

  count++;
  a.innerHTML = count;
  b.innerHTML = count;
  c.innerHTML = count;
}

addItem.addEventListener("click", handlerAdd);

//FUNCTINAITY FOR SUBSTRCACTING COUNT three element with same id
function handlerSubstract(params) {
  let [a, b, c] = orderNumber;
  count--;
  count = Math.max(count, 0);
  a.innerHTML = count;
  b.innerHTML = count;
  c.innerHTML = count;
}
substractItem.addEventListener("click", handlerSubstract);

function cart(params) {
  cartMessages.classList.toggle("hidden");
}
cartIcon.addEventListener("click", cart);

function cartHandle(params) {
  if (count > 0) {
    cartDiv.classList.remove("hidden");
    modal.classList.remove("hidden");
    emptyCartMsg.classList.add("hidden");
    checkOutBtn.classList.remove("hidden");
    // Number(total.innerHTML) = price.value * orderNumber;
    //total.innerHTML = price.value * orderNumber;
  } else if (count < 0) {
    modal.classList.add("hidden");
    checkOutBtn.classList.add("hidden");
    //Number(total.innerHTML) = price.value * orderNumber;
    //total.innerHTML = price.value * orderNumber;
  }
}
addItem.addEventListener("click", cartHandle);

//FUNCTIONALITY /ICON TO DELETE WHAT IS IN CART

function deleteitem(params) {
  count = 0;
  document.getElementsByClassName("cartnumber").textContent = count;
  modal.classList.add("hidden");
  emptyCartMsg.classList.remove("hidden");
  checkOutBtn.classList.add("hidden");
}
delBtn.addEventListener("click", deleteitem);

function addCart(params) {
  cartMessages.classList.toggle("hidden");
}

addToCart.addEventListener("click", addCart);

// orderNumber[].innerHTML = 5;

const controlCarousel = document.getElementById("controls-carousel");
const lgDiv = document.getElementById("lgscreendiv");

const imageBtn = document.querySelectorAll(".image-click");
for (let i = 0; i < imageBtn.length; i++) {
  function showCarousel(params) {
    overlay.classList.remove("hidden");
    controlCarousel.classList.remove("hidden");
    controlCarousel.classList.add("visible");
    controlCarousel.classList.remove("lg:hidden");
  }

  imageBtn[i].addEventListener("click", showCarousel);
}

console.log(imageBtn[i]);
