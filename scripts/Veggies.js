// radio button list of all Veggies in database
import { getVeggies } from "./database.js"

const veggies = getVeggies()

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
