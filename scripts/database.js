const database = {
    proteins: [
        {
            id: 1,
            type: "Chicken",
            calorieCount: 100,
            isSeasoned: true,
            price: 1.50
        }
    ],
    breads: [
        {
            id: 1,
            type: "Honey Oat",
            calorieCount: 300,
            price: 3.25
        },
        {
            id: 2,
            type: "Rye",
            calorieCount: 225,
            price: 2.00
        },
        {
            id: 3,
            type: "Pumpernickel",
            calorieCount: 400,
            price: 2.75
        }
    ],
    toppings: [
        {
            id: 1,
            type: "Guac",
            calorieCount: 130,
            price: 5.50
        }
    ],
    veggies: [
        {
            id: 1,
            type: "Lettuce",
            calorieCount: 3,
            price: .50
        }
    ],
    orders: [
        {
            id: 1,
            proteinId: 1,
            veggieId: 1,
            toppingId: 1,
            breadId: 1,
            addSideItem: true,
            customerName: "Zelda",
            timestamp: 1619707361509
        }
    ]
}

export const getBreads = () => {
    return [...database.breads]
}