import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Home} from '..';
import {useProducts} from '../../../hooks/useProducts';

jest.mock('../../../hooks/useProducts');
const mockedUseProducts = useProducts as jest.MockedFunction<
  typeof useProducts
>;

describe('<Home /> Tests', () => {
  const initialState = {basket: {products: []}};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Should show the loader screen when its loading the products', () => {
    mockedUseProducts.mockReturnValue({
      loading: true,
      products: [],
      fetchProducts: jest.fn(),
      error: undefined,
    });
    const {queryByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('loading-screen')).not.toBeNull();
    expect(queryByTestId('error-screen')).toBeNull();
    expect(queryByTestId('product-list')).toBeNull();
  });

  it('Should show the error screen when there has been an error fetching the products', () => {
    mockedUseProducts.mockReturnValue({
      loading: false,
      products: [],
      fetchProducts: jest.fn(),
      error: 'there was an error',
    });
    const {queryByTestId, queryByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('loading-screen')).toBeNull();
    expect(queryByTestId('error-screen')).not.toBeNull();
    expect(queryByText(/there was an error/i)).not.toBeNull();
    expect(queryByTestId('product-list')).toBeNull();
  });

  it('Should show the empty component when the product list is empty', () => {
    mockedUseProducts.mockReturnValue({
      loading: false,
      products: [],
      fetchProducts: jest.fn(),
      error: undefined,
    });
    const {queryByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('loading-screen')).toBeNull();
    expect(queryByTestId('error-screen')).toBeNull();
    expect(queryByTestId('product-list')).not.toBeNull();
    expect(queryByTestId('empty-product-list')).not.toBeNull();
  });

  it('Should not show the empty component when the product list is not empty', () => {
    mockedUseProducts.mockReturnValue({
      loading: false,
      products: [
        {
          id: 1,
          name: 'great outfit',
          colour: 'Black',
          price: 70,
          img: 'https',
        },
      ],
      fetchProducts: jest.fn(),
      error: undefined,
    });
    const {queryByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </Provider>,
    );

    expect(queryByTestId('loading-screen')).toBeNull();
    expect(queryByTestId('error-screen')).toBeNull();
    expect(queryByTestId('product-list')).not.toBeNull();
    expect(queryByTestId('empty-product-list')).toBeNull();
  });
});
