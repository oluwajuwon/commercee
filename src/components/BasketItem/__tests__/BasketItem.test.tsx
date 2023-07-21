import React from 'react';
import {render} from '@testing-library/react-native';
import {BasketItem} from '..';

describe('<BasketItem /> Tests', () => {
  const props = {
    basketItem: {
      product: {
        id: 1,
        name: 'Pretty outfit',
        colour: 'Black',
        price: 40,
        img: 'https://image.com',
      },
      quantity: 1,
    },
    addQuantity: jest.fn(),
    subtractQuanity: jest.fn(),
    removeItem: jest.fn(),
  };

  it('Should show the basket item', () => {
    const {queryByTestId} = render(
      <BasketItem
        basketItem={props.basketItem}
        addQuantity={props.addQuantity}
        subtractQuanity={props.subtractQuanity}
        removeItem={props.removeItem}
      />,
    );

    expect(queryByTestId('item-image')).not.toBeNull();
    expect(queryByTestId('item-name')).not.toBeNull();
    expect(queryByTestId('item-price')).not.toBeNull();
  });
});
