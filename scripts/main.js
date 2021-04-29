// Main is responsible for rendering HTML to the DOM
import { SubShop } from "./SubShop.js"

const mainContainer = document.querySelector("#mainZelda")

const renderHTML = () => {
    mainContainer.innerHTML = SubShop()
}

renderHTML()