import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(product => product.id === action.data.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({ ...action.data, amount: 1 });
                }
            });
        default:
            return state;
    }
}
