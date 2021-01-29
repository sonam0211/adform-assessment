import * as actionConstant from '../actionConstant';

export const userReducer = (
  state = { usersList: [], loading: true },
  action
) => {
  switch (action.type) {
    case actionConstant.FETCH_USERS_LIST:
      return { ...state, loading: true };

    case actionConstant.FETCH_USERS_LIST_SUCCESS:
      return { ...state, usersList: action.payload, loading: false };

    case actionConstant.FETCH_USERS_LIST_FAILURE:
      return { ...state, usersList: [], loading: false };

    default:
      return state;
  }
};
