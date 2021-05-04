// radio button list of all Proteins in database
import { getProteins, setProtein } from "./database.js"

const proteins = getProteins()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "protein") {
            const [prompt, proteinId] = changeEvent.target.value.split("--")

            setProtein(parseInt(proteinId))
        }
    }
)

export const ProteinHTML = () => {

    let html = "<ul class='choice--list protein--list'>"

    for (const protein of proteins) {
        html += `<li class="choice-list-item protein--list-item">
        <input type="radio" value="protein--${protein.id}" name="protein"> ${protein.type}
        
        <div class="price">Price: $${protein.price.toFixed(2)}</div>
        </li>`
    }

    html += "</ul>"

    // what kind of data should this function return?
    // STRING of HTML

    return html
}

