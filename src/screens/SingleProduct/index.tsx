import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import type {RouteProp} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../types/routes';
import LoadingScreen from '../../components/LoadingScreen';
import getStyles from './styles';
import {Button} from '../../components/Button';
import {useAppSelector} from '../../hooks';
import Like from '../../assets/icons/heart.png';
import Header from '../../components/Header';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../store/slices/basketSlice';

type SingleProductRouteProp = RouteProp<RootStackParamList, 'Product'>;

export const SingleProduct = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const route = useRoute<SingleProductRouteProp>();
  const navigation = useNavigation();
  const {product} = route.params;
  const styles = getStyles();
  const cart = useAppSelector(state => state.basket.products);
  const dispatch = useDispatch();

  if (loading && !product) return <LoadingScreen />;

  const handleAddToBasket = () => {
    const item = {
      product,
      quantity: 1,
    };
    dispatch(addProduct(item));
  };

  const imgUrl = product.img.replace('http://', 'https://');

  if (product)
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header hasBackBtn navigation={navigation} />
        <ScrollView contentContainerStyle={styles.scroll}>
          <FastImage source={{uri: imgUrl}} style={styles.img} />
          <View style={styles.details}>
            <View style={styles.productDetailsTop}>
              <Text style={styles.name}>{product.name}</Text>
              <Image source={Like} style={styles.like} />
            </View>
            <Text style={styles.price}>£{product.price}</Text>
            <Button
              text="Add to Basket"
              onPress={handleAddToBasket}
              buttonContainerStyles={styles.btn}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};
