// radio button list of all Veggies in database
import { getBreads, getOrders, getProteins } from "./database.js"

const orders = getOrders()
const proteins = getProteins()
const breads = getBreads()

export const Orders = () => {

    const arrayOfOrderHTMLStrings = orders.map(
        (order) => {

            // Find the matching protein
            const foundProtein = proteins.find(
                (proteinObject) => {
                    if (proteinObject.id === order.proteinId) {
                        return true
                    }
                }
            )

            // Find the matching bread
            const foundBread = breads.find( b => b.id === order.breadId )

            // Return the HTML representation of the order
            return `
                <div class="order">
                    Order #${order.id} has the protein of ${foundProtein.type} on a ${foundBread.type} bread
                </div>
            `
        }
    )

    const html = arrayOfOrderHTMLStrings.join("")


    return html
}
