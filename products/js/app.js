
const menuEl = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

const toggleBtn = () => {
    menuEl.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleBtn);




