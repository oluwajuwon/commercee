import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Basket} from '..';

describe('<Basket /> Tests', () => {
  const initialState = {basket: {products: []}};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Should show the empty basket list message when there are no products in the basket', () => {
    const {queryByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Basket />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('basket-list')).not.toBeNull();
    expect(queryByTestId('empty-basket-list')).not.toBeNull();
  });

  it('Should show the basket list with the item(s) in the basket', () => {
    const initialState = {
      basket: {
        products: [
          {
            product: {
              id: 1,
              name: 'nice outfit',
              img: 'https://google.com',
              colour: 'Black',
            },
            quantity: 1,
          },
        ],
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {queryByTestId, queryByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Basket />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('basket-list')).not.toBeNull();
    expect(queryByText(/nice outfit/i)).not.toBeNull();
  });
});
