const database = {
    proteins: [
        {
            id: 1,
            type: "Chicken",
            calorieCount: 100,
            isSeasoned: true,
            price: 1.50
        },
        {
            id: 2,
            type: "Beef",
            calorieCount: 300,
            isSeasoned: false,
            price: 5.50
        },
        {
            id: 3,
            type: "Prosciutto",
            calorieCount: 200,
            isSeasoned: false,
            price: 3.50
        },
        {
            id: 4,
            type: "Salami",
            calorieCount: 100,
            isSeasoned: true,
            price: 2.50
        },
        {
            id: 5,
            type: "Tofu",
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
        },
        {
            id: 2,
            type: "Sprouts",
            calorieCount: 30,
            price: 2.50
        }
    ],
    veggies: [
        {
            id: 1,
            type: "Lettuce",
            calorieCount: 3,
            price: .50
        },
        {
            id: 2,
            type: "Onion",
            calorieCount: 4,
            price: .70
        },
        {
            id: 3,
            type: "Tomato",
            calorieCount: 3,
            price: .25
        },
        {
            id: 4,
            type: "Black Olives",
            calorieCount: 10,
            price: .50
        },
        {
            id: 5,
            type: "Italian Peppers",
            calorieCount: 7,
            price: .80
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
        },
        {
            id: 2,
            proteinId: 1,
            veggieId: 1,
            toppingId: 1,
            breadId: 1,
            addSideItem: true,
            customerName: "Zelda",
            timestamp: 1619707361509
        }
    ],
    orderBuilder: {}
}

export const addNewCustomerOrder = () => {
    //push method to get order object into orders array
    const newOrder = {...database.orderBuilder}

    newOrder.id = (database.orders.length > 0
        ? [...database.orders].pop().id + 1
        : 1)

    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)
    console.log(database)
}

export const getOrders = () => {
    return [...database.orders]
}

export const getBreads = () => {
    return [...database.breads]
}

export const getProteins = () => {
    return [...database.proteins]
}

export const getVeggies = () => {
    return [...database.veggies]
}

export const getToppings = () => {
    return [...database.toppings]
}

export const setBread = (id) => {
    database.orderBuilder.breadId = id
    console.log(database)
}

export const setProtein = (id) => {
    database.orderBuilder.proteinId = id
    console.log(database)
}

export const setTopping = (id) => {
    database.orderBuilder.toppingId = id
    console.log(database)
}

export const setVeggie = (id) => {
    database.orderBuilder.veggieId = id
    console.log(database)
}