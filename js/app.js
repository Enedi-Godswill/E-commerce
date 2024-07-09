
const menuEl = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

const toggleBtn = () => {
    menuEl.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleBtn);

// Sort Section
const downBtn = document.querySelector(".down-btn");
const inputEl = document.querySelector(".inputEl");
function showInput() {
    inputEl.classList.toggle("active");
}
downBtn.addEventListener("click", showInput);


