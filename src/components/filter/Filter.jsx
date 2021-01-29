/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Date from '../date/Date';
import { setName, setEndDate, setStartDate } from '../../redux/action';
import InputBox from '../input-box/InputBox';
import './Filter.css';
import {
  nameSelector,
  startDateSelector,
  endDateSelector
} from '../../redux/selector';

const Filter = () => {
  const dispatch = useDispatch();

  const name = useSelector(nameSelector);

  const startDate = useSelector(startDateSelector);

  const endDate = useSelector(endDateSelector);

  const formatStartDate = (value) => {
    dispatch(setStartDate(value));
  };

  const formatEndDate = (value) => {
    if (moment(value, 'YYYY-MM-DD').isBefore(startDate, 'YYYY-MM-DD')) {
      dispatch(setEndDate(''));
    } else {
      dispatch(setEndDate(value));
    }
  };

  const filterByName = (name) => {
    dispatch(setName(name));
  };

  return (
    <>
      <div className="filter-container">
        <div className="date-container">
          <div className="date-margin">
            <Date
              onChange={(value) => formatStartDate(value)}
              text={startDate}
              label="Start-Date"
            ></Date>
          </div>

          <Date
            onChange={(value) => formatEndDate(value)}
            text={endDate}
            label="End-Date"
          ></Date>
        </div>
        <div>
          <InputBox
            onChange={(value) => filterByName(value)}
            text={name}
            label="Search by Name"
          ></InputBox>
        </div>
      </div>
    </>
  );
};
export default Filter;
