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
      <table data-testid="tableField">
        <thead>
          <tr>
            {theads.map((thead) => {
              return <th key={thead}>{thead}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{findName(row.userId)}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>
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
                </td>
                <td>{` ${abbrNum(row.Budget, 1)} USD`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CampaignDisplay;
