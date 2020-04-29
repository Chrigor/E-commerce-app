export function addToCart(product) {
    return {
        type: 'ADD_TO_CART',
        data: product,
    };
}

export function updateAmount(id, amount) {
    return {
        type: 'UPDATE_AMOUNT',
        id,
        amount
    }
}