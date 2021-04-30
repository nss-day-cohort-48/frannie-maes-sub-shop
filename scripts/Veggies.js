// radio button list of all Veggies in database
import { getVeggies } from "./database.js"

const veggies = getVeggies()

export const VeggieHTML = () => {

    let html = "<ul class='choice--list veggie--list'>"

    for (const veggie of veggies) {
        html += `<li class="choice-list-item veggie--list-item">
        <input type="radio" value="veggie--${veggie.id}" name="veggie"> ${veggie.type} $${veggie.price.toFixed(2)}
        </li>`
    }

    html += "</ul>"

    // what kind of data should this function return?
    // STRING of HTML

    return html
}

