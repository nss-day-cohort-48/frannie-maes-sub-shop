// radio button list of all Veggies in database
import { getBreads, getOrders, getProteins, getToppings, getVeggies, getOrderToppings } from "./database.js"

console.log("Orders module initialized...")
const proteins = getProteins()
const breads = getBreads()
const toppings = getToppings()
const veggies = getVeggies()
const orderToppings = getOrderToppings()

export const Orders = () => {
    console.log("Orders function invoked...")

    const orders = getOrders()

    const arrayOfOrderHTMLStrings = orders.map(
        (order) => {
            let totalCost = 0

            // Find the matching protein
            const foundProtein = proteins.find(
                (proteinObject) => {
                    if (proteinObject.id === order.proteinId) {
                        return true
                    }
                }
            )
            totalCost += foundProtein.price

            // Find the matching bread
            const foundBread = breads.find( b => b.id === order.breadId )
            totalCost += foundBread.price

            const foundVeggie = veggies.find( v => v.id === order.veggieId )
            totalCost += foundVeggie.price

            const foundOrderToppings = orderToppings.filter( orderTopping => {
                return orderTopping.orderId === order.id
            })

            const foundToppings = foundOrderToppings.map(foundOrderTopping => {
                const foundTopping = toppings.find(topping => {
                    return topping.id === foundOrderTopping.toppingId
                })

                return foundTopping
            })
            debugger
            // totalCost += foundTopping.price

            // Return the HTML representation of the order
            return `
                <div class="order">
                    Order #${order.id} placed at
                    ${new Date(order.timestamp).toLocaleString()},
                    has the protein of ${foundProtein.type}
                    on a ${foundBread.type} bread
                    for a cost of ${totalCost.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>
            `
        }
    )

    const html = arrayOfOrderHTMLStrings.join("")


    return html
}
