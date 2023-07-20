import axios from 'axios';
import {ProductType} from '../types/products';

const BASE_URL = 'https://my-json-server.typicode.com/benirvingplt/products';
export const fetchAllProducts = () => {
  return new Promise<ProductType[]>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(`${error}`);
      });
  });
};

export const fetchProduct = (productId: number) => {
  return new Promise<ProductType>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/${productId}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(`${error}`);
      });
  });
};
