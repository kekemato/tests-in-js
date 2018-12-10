import { orderTotal } from './index'
import { fetchOrdersAndCalculateTotal } from './index'

describe('Sum without quantity', () => {
    const orders = [
        {
            name: 'lager',
            price: 10,
        },
        {
            name: 'APA',
            price: 15
        }
    ]

    test('Happy path failed', () => {
        expect(
            orderTotal(orders)
        ).toBe(25)
    })

    test('Empty order list must equal 0!', () => {
        expect(
            orderTotal([])
        ).toBe(0)
    })
})

describe('Sum with quantity', () => {

    const ordersWithQuantity = [
        {
            name: 'Lager',
            price: 10,
            quantity: 2
        },
        {
            name: 'APA',
            price: 15,
            quantity: 1
        }
    ]
    const ordersWithZeroQuantity = [
        {
            name: 'Lager',
            price: 10,
            quantity: 2
        },
        {
            name: 'APA',
            price: 15,
            quantity: 0
        }
    ]

    test('Fails to calculate sum with quantity', () => {
        expect(
            orderTotal(ordersWithQuantity)
        ).toBe(35)
    })


    test('Fails to calculate sum with ZERO quantity', () => {
        expect(
            orderTotal(ordersWithZeroQuantity)
        ).toBe(20)
    })
})

describe('Sum with shipping', () => {
    const orders = [
        {
            name: 'Lager',
            price: 10,
            quantity: 100,
        },
        {
            shipping: true,
            price: 25,
            freeShipping: 200
        }
    ]

    const orders2 = [
        {
            name: 'Lager',
            price: 10,
            quantity: 2,
        },
        {
            shipping: true,
            price: 25,
            freeShipping: 200
        }
    ]

    test('Free shipping >= 200', () => {
        expect(orderTotal(orders)
        ).toBe(1000)
    })

    test('Free shipping <= 200', () => {
        expect(orderTotal(orders2)
        ).toBe(45)
    })
})

describe('Fetching data to calculate sum', () => {
    test('Fetchin data without quantity', () => {
        return (fetchOrdersAndCalculateTotal()
        .then(total => expect(total).toBe(25))
        )
    })
})