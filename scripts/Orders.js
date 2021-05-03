// radio button list of all Veggies in database
import { getBreads, getOrders, getProteins } from "./database.js"

console.log("Orders module initialized...")
const proteins = getProteins()
const breads = getBreads()

export const Orders = () => {
    console.log("Orders function invoked...")

    const orders = getOrders()

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
                    Order #${order.id} placed at ${new Date(order.timestamp).toLocaleString()}, has the protein of ${foundProtein.type} on a ${foundBread.type} bread
                </div>
            `
        }
    )

    const html = arrayOfOrderHTMLStrings.join("")


    return html
}
