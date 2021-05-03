// radio button list of all breads in database
import {getBreads, setBread} from "./database.js"

const breads = getBreads()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "bread") {
            const [prompt, breadId] = changeEvent.target.value.split("--")

            setBread(parseInt(breadId))
        }
    }
)
export const BreadHTML = () => {

    let html = "<ul class='choice--list bread--list'>"

    for (const bread of breads) {
        html += `<li class="choice-list-item bread--list-item">
        <input type="radio" value="bread--${bread.id}" name="bread"> ${bread.type} $${bread.price.toFixed(2)}
        </li>`
    }

    html += "</ul>"

    // what kind of data should this function return?
    // STRING of HTML

    return html
}

