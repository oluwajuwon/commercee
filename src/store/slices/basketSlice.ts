import {createSlice} from '@reduxjs/toolkit';
import {BasketItemType} from '../../types/products';

type BasketState = {
  products: BasketItemType[];
};
const initialState = {
  products: [],
} as BasketState;

export const slice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, payload) => {
      const itemIndex = state.products.findIndex(
        item => item.product.id === payload.payload.product.id,
      );

      if (itemIndex >= 0) {
        /** i would add this here to add to product quantity if the item already exists in the basket,
         *  but there is no notitification/toast to alert the user that it has been added to their basket again
         *  which will make the user experience unsmooth
         *  so i'll just make sure it doesnt do anything
         **/
        // const updatedProductsArr = [...state.products].map((product, i) =>
        //   i === itemIndex
        //     ? {...product, quantity: Number(product.quantity + 1)}
        //     : product,
        // );
        // return {...state, products: updatedProductsArr};
        return;
      } else {
        return {...state, products: [...state.products, payload.payload]};
      }
    },
    removeProduct: (state, paylod) => {
      const updatedProductsArr = [...state.products].filter(
        (product, i) => product.product.id !== paylod.payload.id,
      );
      return {...state, products: updatedProductsArr};
    },
    addQuantity: (state, payload) => {
      const itemIndex = state.products.findIndex(
        item => item.product.id === payload.payload.id,
      );
      const updatedProductsArr = [...state.products].map((product, i) =>
        i === itemIndex
          ? {...product, quantity: Number(product.quantity + 1)}
          : product,
      );
      return {...state, products: updatedProductsArr};
    },
    removeQuantity: (state, payload) => {
      const itemIndex = state.products.findIndex(
        item => item.product.id === payload.payload.id,
      );
      const updatedProductsArr = [...state.products].map((product, i) =>
        i === itemIndex
          ? {
              ...product,
              quantity:
                product.quantity === 1
                  ? product.quantity
                  : Number(product.quantity - 1),
            }
          : product,
      );
      return {...state, products: updatedProductsArr};
    },
  },
});

export const {addProduct, removeProduct, addQuantity, removeQuantity} =
  slice.actions;

export default slice.reducer;
