const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.data];
        default:
            return state;
    }
}
