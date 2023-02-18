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
functionMobilemenu(params) {
    navMenu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    cartMessages.classList.add("hidden");
    controlCarousel.classList.remove("visible")
    controlCarousel.classList.add("lg:hidden")
}
mobileMenu.addEventListener("click", Mobilemenu);
overlay.addEventListener("click", Mobilemenu);
cancelBtn.addEventListener("click", Mobilemenu);

console.log(orderNumber);
