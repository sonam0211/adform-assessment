import { render } from '@testing-library/react';
import React from 'react';
import Table from './Table';

describe('the Filter component', () => {
  it('should render the Filter component', () => {
    const mockProps = {
      rows: [
        {
          id: 1,
          name: 'Divavu',
          startDate: '01/01/2021',
          endDate: '03/09/2022',
          Budget: 88888888,
          userId: 3
        }
      ],
      findActive: () => true,
      findName: () => 'Divavu'
    };
    const withData = () => <Table {...mockProps} />;
    const { getByTestId } = render(withData());

    const table = getByTestId('tableField');
    expect(table).toBeInTheDocument();
  });
});
