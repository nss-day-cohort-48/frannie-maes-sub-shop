// radio button list of all Proteins in database
import { getProteins } from "./database.js"

const proteins = getProteins()

export const ProteinHTML = () => {

    let html = "<ul class='choice--list protein--list'>"

    for (const protein of proteins) {
        html += `<li class="choice-list-item protein--list-item">
        <input type="radio" value="protein--${protein.id}" name="protein"> ${protein.type} $${protein.price.toFixed(2)}
        </li>`
    }

    html += "</ul>"

    // what kind of data should this function return?
    // STRING of HTML

    return html
}

