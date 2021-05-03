import { addNewCustomerOrder } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "submitOrderButton"){
            addNewCustomerOrder()
        }
    }
)
export const SubmitOrderButton = () => {
    return `
        <button id="submitOrderButton">Submit</button>
    `
}