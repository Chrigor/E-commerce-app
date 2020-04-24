import { combineReducers } from 'redux';
import login from './Login';
import cart from './Cart';

const rootReducer = combineReducers({
    login,
    cart
});

export default rootReducer;
