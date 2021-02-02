/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../redux/selector';

const WithLoading = (WrappedComponent) => {
  return function WihLoadingComponent() {
    const isLoading = useSelector(isLoadingSelector);

    return (
      <div>
        {isLoading && <div>Hold on, fetching data might take some time.</div>}
        <WrappedComponent />
      </div>
    );
  };
};
export default WithLoading;
