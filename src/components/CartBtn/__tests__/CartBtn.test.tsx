import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {CartBtn} from '..';

const mockedNavigation = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe('<CartBtn /> Tests', () => {
  it('Should not show the cart button if there are no poducts in the basket', () => {
    const initialState = {basket: {products: []}};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {queryByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CartBtn />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('btn-container')).toBeNull();
    expect(queryByTestId('btn-cart-length')).toBeNull();
    expect(queryByTestId('btn-cart-icon')).toBeNull();
  });

  it('Should show the cart button if there are poducts in the basket', () => {
    const initialState = {
      basket: {
        products: [
          {
            product: {id: 1},
            quantity: 1,
          },
        ],
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {queryByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CartBtn />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('btn-container')).not.toBeNull();
    expect(queryByTestId('btn-cart-length')).not.toBeNull();
    expect(queryByTestId('btn-cart-icon')).not.toBeNull();
  });

  it('Should call the navigation method to the basket screen', () => {
    const initialState = {
      basket: {
        products: [
          {
            product: {id: 1},
            quantity: 1,
          },
        ],
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CartBtn />
        </NavigationContainer>
      </Provider>,
    );

    const cartButton = getByTestId("btn-container");
    fireEvent.press(cartButton);
    expect(mockedNavigation).toHaveBeenCalledWith('Basket');
  });


});
