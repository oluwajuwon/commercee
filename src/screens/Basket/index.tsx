import {useState, useEffect} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import getStyles from './styles';
import {BasketItem} from '../../components/BasketItem';
import Header from '../../components/Header';
import {Button} from '../../components/Button';
import {useAppSelector} from '../../hooks';
import {BasketItemType} from '../../types/products';
import {
  addQuantity,
  removeQuantity,
  removeProduct,
} from '../../store/slices/basketSlice';

type BasketProps = {};

export const Basket = ({}: BasketProps) => {
  const styles = getStyles();
  const products = useAppSelector(state => state.basket.products);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    /** This method is suposed to handle the flow after the user has decided on the products and their quantity */
  };

  const handleAddQuantity = (productId: number) => {
    dispatch(addQuantity({id: productId}));
  };

  const handleSubtractQuantity = (productId: number) => {
    dispatch(removeQuantity({id: productId}));
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeProduct({id: productId}));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header hasBackBtn navigation={navigation} title="Basket" />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <BasketItem
              basketItem={item}
              addQuantity={handleAddQuantity}
              subtractQuanity={handleSubtractQuantity}
              removeItem={handleRemoveItem}
            />
          )}
          keyExtractor={(item: BasketItemType, index) =>
            item.product.id?.toString()
          }
          testID="basket-list"
          ListEmptyComponent={
            <View testID="empty-basket-list" style={styles.emptyBasket}>
              <Text>No items in your basket</Text>
            </View>
          }
        />
        {products.length > 0 && (
          <Button text="Checkout" onPress={handleCheckout} />
        )}
      </View>
    </SafeAreaView>
  );
};
