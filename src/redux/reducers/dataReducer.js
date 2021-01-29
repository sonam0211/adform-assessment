import * as actionConstant from '../actionConstant';

const dataDefaultState = {
  name: '',
  startDate: '',
  endDate: ''
};

export const dataReducer = (state = dataDefaultState, action) => {
  switch (action.type) {
    case actionConstant.SET_NAME:
      return {
        ...state,
        name: action.payload
      };

    case actionConstant.SET_STARTDATE:
      return {
        ...state,
        startDate: action.payload
      };
    case actionConstant.SET_ENDDATE:
      return {
        ...state,
        endDate: action.payload
      };

    default:
      return state;
  }
};
