import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Table from '../../components/table/Table';
import Filter from '../../components/filter/Filter';
import WithLoading from '../../HOC/withLoading';
import {
  fetchCampaignList,
  fetchCampaignListFailure
} from '../../redux/action';
import { fetchUsersList } from '../../redux/thunk';
import { userListSelector, filteredCampainList } from '../../redux/selector';

const CampaignDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  const userList = useSelector(userListSelector);

  const selectedData = useSelector(filteredCampainList);

  const addCampaigns = (data) => {
    if (Array.isArray(data)) {
      dispatch(fetchCampaignList(data));
    } else {
      dispatch(fetchCampaignListFailure());
    }
  };

  window.addCampaigns = addCampaigns;

  const findActive = (start, end) => {
    const currentDate = moment().format('YYYY-MM-DD');
    const startDateformat = moment(start).format('YYYY-MM-DD');
    const endDateformat = moment(end).format('YYYY-MM-DD');
    const active = moment(currentDate).isBetween(startDateformat, endDateformat)
      ? true
      : false;
    return active;
  };

  const findName = (id) => {
    const user = userList.find((user) => user.id === id);
    return user?.name || 'Unkown User';
  };

  return (
    <>
      <Filter />
      <div>
        <Table
          rows={selectedData}
          findName={findName}
          findActive={findActive}
        />
      </div>
    </>
  );
};

export default WithLoading(CampaignDisplay);
