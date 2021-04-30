// generates all the HTML
import { BreadHTML } from "./Breads.js"
import { ProteinHTML } from "./Proteins.js"
import { VeggieHTML } from "./Veggies.js"
import { ToppingHTML } from "./Toppings.js"
import { Orders } from "./Orders.js"

export const SubShop = () => {
    return  `
        <h1 class="welcome-message">Hi! Welcome To Frannie Mae's Sub Shop</h1>
        <div class="ingredients--container">
            <article>
                <h2>Breads</h2>
                ${ BreadHTML() }
            </article>
            <article>
                <h2>Proteins</h2>
                ${ ProteinHTML() }
            </article>
            <article>
                <h2>Veggies</h2>
                ${ VeggieHTML() }
            </article>
            <article>
                <h2>Toppings</h2>
                ${ ToppingHTML() }
            </article>
        </div>
        <article>
            <h2>Orders Placed</h2>
            ${ Orders() }
        </article>
    `
}