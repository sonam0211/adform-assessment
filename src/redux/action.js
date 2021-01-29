import * as action from './actionConstant';

export const fetchUserlistRequest = () => ({
  type: action.FETCH_USERS_LIST
});

export const fetchUserlistRequestSuccess = (payload) => ({
  type: action.FETCH_USERS_LIST_SUCCESS,
  payload
});

export const fetchUserlistRequestFailure = (payload) => ({
  type: action.FETCH_USERS_LIST_FAILURE,
  payload
});

export const fetchCampaignList = (payload) => {
  return {
    type: action.FETCH_CAMPAIGN_LIST,
    payload: payload
  };
};

export const fetchCampaignListFailure = () => {
  return {
    type: action.FETCH_CAMPAIGN_LIST_FAILURE,
    payload: []
  };
};

export const setName = (payload) => {
  return {
    type: action.SET_NAME,
    payload: payload
  };
};

export const setStartDate = (payload) => {
  return {
    type: action.SET_STARTDATE,
    payload: payload
  };
};

export const setEndDate = (payload) => {
  return {
    type: action.SET_ENDDATE,
    payload: payload
  };
};

export const setFilteredData = (payload) => {
  return {
    type: action.SET_FILTERED_DATA,
    payload: payload
  };
};
