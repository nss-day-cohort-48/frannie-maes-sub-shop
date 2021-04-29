// radio button list of all breads in database
import {getBreads} from "./database.js"

const breads = getBreads()

export const BreadHTML = () => {

    let html = "<ul>"

    for (const bread of breads) {
        html += `<li>
        <input type="radio" value="bread--${bread.id}" name="bread"> ${bread.type} $${bread.price.toFixed(2)}
        </li>`
    }

    html += "</ul>"

    // what kind of data should this function return?
    // STRING of HTML

    return html
}

