import { auth } from '../action-types';

export const initialState = {
  isLoggedIn: false,
  token: '',
  post: null,
  isChecked: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.jwt,
        post: action.post,
        isChecked: action.isChecked,
        isLoading: false,
      };
    case auth.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
      };
    default:
      return state;
  }
};
