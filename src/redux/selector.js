import { createSelector } from 'reselect';
import { checkRange } from '../utils/checkRange';

export const userListSelector = (state) => state.userReducer.usersList;

export const isLoadingSelector = (state) => state.userReducer.loading;

export const nameSelector = (state) => state.dataReducer.name;

export const startDateSelector = (state) => state.dataReducer.startDate;

export const endDateSelector = (state) => state.dataReducer.endDate;

export const campaignListSelector = (state) =>
  state.campaignReducer.campaignList;

export const filteredCampainList = createSelector(
  campaignListSelector,
  nameSelector,
  startDateSelector,
  endDateSelector,
  (filteredData, name, startDate, endDate) => {
    return filteredData.filter((campaign) => {
      if (
        checkRange(campaign.startDate, startDate, endDate) &&
        checkRange(campaign.endDate, startDate, endDate) &&
        campaign.name.toLowerCase().includes(name.toLowerCase())
      )
        return true;
    });
  }
);
