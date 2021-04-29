// generates all the HTML
import { BreadHTML } from "./Breads.js"
export const SubShop = () => {
    return  `
        <h1>Hi! Welcome To Frannie Mae's Sub Shop</h1>
        <article>
            <h2>Breads</h2>
            ${ BreadHTML() }
        </article>
    `
}