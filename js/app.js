
const menuEl = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

const toggleBtn = () => {
    menuEl.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleBtn);

// Sort Section
const downBtns = document.querySelectorAll(".down-btn");
const inputEls = document.querySelectorAll(".inputEl");
function showInput() {
    inputEls.classList.toggle("active");
}
downBtns.addEventListener("click", showInput);


