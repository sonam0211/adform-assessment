import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import InputBox from './InputBox';

describe('the InputBox component', () => {
  it('should render the InputBox', () => {
    const mockProps = {
      label: 'Label',
      text: 'test 1',
      onChange: jest.fn()
    };
    const withData = () => <InputBox {...mockProps} />;
    const { getByTestId } = render(withData());

    const inputField = getByTestId('inputField');
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveValue(mockProps.text);

    fireEvent.change(inputField, { target: { value: 'test 1' } });
  });
});
