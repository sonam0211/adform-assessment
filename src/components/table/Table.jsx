/* eslint-disable react/prop-types */
import React from 'react';

import './Table.css';
import { abbrNum } from '../../utils/budgetFormatter';

const theads = [
  'Name',
  'User Name',
  'Start Date',
  'End Date',
  'Active',
  'Budget'
];

const CampaignDisplay = ({ rows, findName, findActive }) => {
  return (
    <>
      <div className="grid" data-testid="tableField">
        {theads.map((thead) => {
          return (
            <span key={thead}>
              <strong>{thead}</strong>
            </span>
          );
        })}

        {rows.map((row) => {
          return (
            <>
              <span>{row.name}</span>
              <span>{findName(row.userId)}</span>
              <span>{row.startDate}</span>
              <span>{row.endDate}</span>
              <span>
                <span
                  className={`${
                    findActive(row.startDate, row.endDate) === true
                      ? 'active'
                      : 'inactive'
                  }`}
                ></span>
                <span>{`${
                  findActive(row.startDate, row.endDate) === true
                    ? 'active'
                    : 'inactive'
                }`}</span>
              </span>

              <span>{` ${abbrNum(row.Budget, 1)} USD`}</span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CampaignDisplay;
