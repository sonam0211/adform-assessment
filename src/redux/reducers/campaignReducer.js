import * as actionConstant from '../actionConstant';
import campaignList from '../../CampaignData';

export const campaignReducer = (state = { campaignList }, action) => {
  switch (action.type) {
    case actionConstant.FETCH_CAMPAIGN_LIST:
      return {
        ...state,
        campaignList: [...state.campaignList, ...action.payload]
      };
    case actionConstant.FETCH_CAMPAIGN_LIST_FAILURE:
      return {
        ...state,
        filteredData: [...state.campaignList, ...action.payload]
      };
    default:
      return state;
  }
};
