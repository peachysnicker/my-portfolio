// Our javascript goes here
const hamburgerButton = document.querySelector(".hamburger-icon")
const hamburgerList = document.querySelector(".hamburger-list-container")

hamburgerButton.addEventListener("click", () => {
    hamburgerList.classList.toggle("hidden")
})