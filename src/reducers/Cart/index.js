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

        case 'UPDATE_AMOUNT': {

            if(action.amount <= 0){
                return state;
            }

            return produce(state, draft => {
                const productIndex = draft.findIndex(product => product.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            })
        }
        default:
            return state;
    }
}
