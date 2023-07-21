import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '..';

describe('<Button /> Tests', () => {
  const handlePress = jest.fn();

  it('Should show the button', () => {
    const {queryByTestId} = render(<Button text="Go to home" onPress={handlePress} />);

    expect(queryByTestId('button-container')).not.toBeNull();
    expect(queryByTestId('button-text')).not.toBeNull();
  });

  it('Should show the button loader', () => {
    const {queryByTestId} = render(<Button text="Go to home" onPress={handlePress} isLoading/>);

    expect(queryByTestId('button-loader')).not.toBeNull();
  });
});
