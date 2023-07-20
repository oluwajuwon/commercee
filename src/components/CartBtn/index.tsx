import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  ViewStyle,
  TextStyle,
  Image,
  View,
} from 'react-native';
import getStyles from './styles';
import Bag from '../../assets/icons/shopping-bag.png';
import {useAppSelector} from '../../hooks';
import {useNavigation} from '@react-navigation/native';

type CartBtnProps = {};
export const CartBtn = ({}: CartBtnProps) => {
  const navigation = useNavigation();
  const styles = getStyles();
  const cart = useAppSelector(state => state.basket.products);

  const handleNavigate = () => {
    navigation.navigate('Basket' as never);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      onPress={handleNavigate}>
      <View style={styles.detailsContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.buttonText}>{cart.length}</Text>
        </View>
        <Image source={Bag} style={styles.bag} />
      </View>
    </TouchableOpacity>
  );
};
