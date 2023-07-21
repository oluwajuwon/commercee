import {useState, useEffect} from 'react';
import {fetchAllProducts} from '../api/products';
import {ProductType} from '../types/products';

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetchAllProducts()
      .then(products => {
        setLoading(false);
        setProducts(products);
      })
      .catch(() => {
        setLoading(false);
        setError(`${error}`);
      });
  };

  return {loading, products, error, fetchProducts};
};
