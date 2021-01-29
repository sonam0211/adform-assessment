import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Date from './Date';

describe('the Date component', () => {
  it('should render the Date', () => {
    const mockProps = {
      label: 'Date',
      text: '02/02/1990',
      onChange: jest.fn()
    };
    const withData = () => <Date {...mockProps} />;
    const { getByTestId } = render(withData());

    const dateField = getByTestId('dateField');
    fireEvent.change(dateField, { target: { value: '02/02/1990' } });
    expect(dateField).toBeInTheDocument();
  });
});
