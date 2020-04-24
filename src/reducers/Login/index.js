const INITIAL_STATE = {
  token: '',
  user: {},
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_LOGIN':
      return {...state, ...action.data};
    default:
      return state;
  }
}
