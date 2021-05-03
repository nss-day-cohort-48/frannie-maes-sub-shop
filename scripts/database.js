const database = {
  proteins: [
    {
      id: 1,
      type: "Chicken",
      calorieCount: 100,
      isSeasoned: true,
      price: 1.5,
    },
    {
      id: 2,
      type: "Beef",
      calorieCount: 300,
      isSeasoned: false,
      price: 5.5,
    },
    {
      id: 3,
      type: "Prosciutto",
      calorieCount: 200,
      isSeasoned: false,
      price: 3.5,
    },
    {
      id: 4,
      type: "Salami",
      calorieCount: 100,
      isSeasoned: true,
      price: 2.5,
    },
    {
      id: 5,
      type: "Tofu",
      calorieCount: 100,
      isSeasoned: true,
      price: 1.5,
    },
  ],
  breads: [
    {
      id: 1,
      type: "Honey Oat",
      calorieCount: 300,
      price: 3.25,
    },
    {
      id: 2,
      type: "Rye",
      calorieCount: 225,
      price: 2.0,
    },
    {
      id: 3,
      type: "Pumpernickel",
      calorieCount: 400,
      price: 2.75,
    },
  ],
  toppings: [
    {
      id: 1,
      type: "Guac",
      calorieCount: 130,
      price: 5.5,
    },
    {
      id: 2,
      type: "Sprouts",
      calorieCount: 30,
      price: 2.5,
    },
  ],
  veggies: [
    {
      id: 1,
      type: "Lettuce",
      calorieCount: 3,
      price: 0.5,
    },
    {
      id: 2,
      type: "Onion",
      calorieCount: 4,
      price: 0.7,
    },
    {
      id: 3,
      type: "Tomato",
      calorieCount: 3,
      price: 0.25,
    },
    {
      id: 4,
      type: "Black Olives",
      calorieCount: 10,
      price: 0.5,
    },
    {
      id: 5,
      type: "Italian Peppers",
      calorieCount: 7,
      price: 0.8,
    },
  ],
  orders: [
    {
      id: 1,
      proteinId: 2,
      veggieId: 5,
      toppingId: 1,
      breadId: 1,
      addSideItem: true,
      customerName: "Zelda",
      timestamp: 1619707361509,
    },
    {
      id: 2,
      proteinId: 5,
      veggieId: 1,
      toppingId: 2,
      breadId: 3,
      addSideItem: false,
      customerName: "Link",
      timestamp: 1620059468223,
    },
  ],
  orderBuilder: {},
}

export const addNewCustomerOrder = () => {
    // Check to see if the orderBuilder object has all the necessary properties
  if (
    "proteinId" in database.orderBuilder &&
    "veggieId" in database.orderBuilder &&
    "toppingId" in database.orderBuilder &&
    "breadId" in database.orderBuilder
  ) {
      // creating a copy of the orderBuilder object and storing that object in the newOrder variable
        const newOrder = { ...database.orderBuilder }

        //* Use ternary statement to conditionally set the value of newOrder.id...
        // Are there any existing order objects in the orders array?
        newOrder.id = database.orders.length > 0
        // Yes? (length of orders array is greater than 0)
        // ---- Get the value of id of the the last order object from orders array.
        // ---- Set the newOrder.id equal to that value + one
        ? [...database.orders].pop().id + 1
        // No? (length of orders array is 0)
        // ---- Set newOrder.id equal to 1
        : 1

        //* This is the if..else way of writing the conditional logic above
        // if(database.orders.length > 0){
        //     newOrder.id = [...database.orders].pop().id + 1
        // } else {
        //     newOrder.id = 1
        // }

        // assigning the value of the newOrder.timestamp property to the current timestamp
        newOrder.timestamp = Date.now()

        // push the newOrder object into the orders array
        database.orders.push(newOrder)

        // set the value of orderBuilder to an empty object
        database.orderBuilder = {}

        // announce to the rest of the application that the state of our orders array has changed
        document.dispatchEvent(new CustomEvent("ordersStateHasChanged") )

        // returning true when all properties exists
        return true
  }
  // returning false when there are missing properties ( user must complete selection )
  return false

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
}

export const setProtein = (id) => {
  database.orderBuilder.proteinId = id
}

export const setTopping = (id) => {
  database.orderBuilder.toppingId = id
}

export const setVeggie = (id) => {
  database.orderBuilder.veggieId = id
}
