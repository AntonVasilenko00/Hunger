const burgerMenu = document.querySelector(".header__burger");
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("header__burger--clicked")
});