import * as types from './actionType';

const initialState = {
  isAuth: false,
  userData: {},
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userData: payload,
      };
    case types.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        userData: {},
      };
    default:
      return state;
  }
};
