// radio button list of all Toppings in database
import { getToppings, setTopping } from "./database.js"

const toppings = getToppings()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "topping") {
            const [, toppingId] = changeEvent.target.value.split("--")

            setTopping(parseInt(toppingId))
        }
    }
)
export const ToppingHTML = () => {

    let html = "<ul class='choice--list topping--list'>"

    for (const topping of toppings) {
        html += `<li class="choice-list-item topping--list-item">
        <input type="radio" value="topping--${topping.id}" name="topping"> ${topping.type} $${topping.price.toFixed(2)}
        </li>`
    }

    html += "</ul>"

    // what kind of data should this function return?
    // STRING of HTML

    return html
}

