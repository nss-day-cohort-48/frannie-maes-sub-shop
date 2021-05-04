import { setSideItem } from "./database.js"

let checkboxState = false;

document.addEventListener(
    "change",
    (changeEvent)=>{
        if(changeEvent.target.id === "sideItemCheckbox"){
            checkboxState = changeEvent.target.checked
            setSideItem(checkboxState)
        }
    }
)

export const SideItemCheckbox = () => {
    return `
    <label for="sideItem">Add a side item:</label>
    <input type="checkbox" name="sideItem" id="sideItemCheckbox" ${checkboxState ? 'checked' : ''}/>
    `
}