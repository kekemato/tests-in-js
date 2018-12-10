import { mockedFetch } from "./mockedFetch";

export const orderTotal = (arrayOfOrders) => {
    let sum = arrayOfOrders.reduce(
        (reduced, item, index, array) => (
            reduced + ((item.quantity !== undefined) ?
                item.price * item.quantity
                : item.price)
        ), 0
    )
    const shipping = arrayOfOrders.find(item => item.shipping)

    return (
        shipping &&
            sum >= (shipping.freeShipping + shipping.price) ?
                sum - shipping.price
                :
                sum
    )
}

export const fetchOrdersAndCalculateTotal = () => (
    mockedFetch()
    .then(response => response.json())
    .then(data => orderTotal(data))
)
