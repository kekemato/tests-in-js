// returns promise
// resolves to object that
// has json property that
// is a function that
// returns an array

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

export const mockedFetch = () => {
    return Promise.resolve({
        json: () => orders
    })
}