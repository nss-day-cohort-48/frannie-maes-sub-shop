// radio button list of all Veggies in database
import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "veggie") {
            const [, veggieId] = changeEvent.target.value.split("--")

            setVeggie(parseInt(veggieId))
        }
    }
)

export const VeggieHTML = () => {

    let html = "<ul class='choice--list veggie--list'>"

    const newConvertedVeggieListItemsHTMLArray = veggies.map(
        (currentVeggie) => {
            return `<li class="choice-list-item veggie--list-item">
            <input type="radio" value="veggie--${currentVeggie.id}" name="veggie">
                ${currentVeggie.type} $${currentVeggie.price.toFixed(2)}
            </li>`
        }
    )

    html += newConvertedVeggieListItemsHTMLArray.join("")
    html += "</ul>"

    return html
}
