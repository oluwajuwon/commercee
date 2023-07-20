import {useState, useEffect} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ProductType} from '../../types/products';
import getStyles from './styles';
import Like from '../../assets/icons/heart.png';

type ProductProps = {
  product: ProductType;
  onPress: (productId: ProductType) => void;
};

export const Product = ({product, onPress}: ProductProps) => {
  const {img, name, price, colour, id} = product;
  const styles = getStyles();

  const imgUrl = img.replace('http://', 'https://');

  const handlePress = () => {
    onPress(product);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <FastImage
        source={{uri: imgUrl}}
        style={styles.img}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View>
        <View style={styles.productDetailTop}>
          <Text style={styles.price}>£{price}</Text>
          <Image source={Like} style={styles.like} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <View
          style={[
            styles.colour,
            {
              backgroundColor: `${colour.toLowerCase()}`,
            },
          ]}
        />
      </View>
    </Pressable>
  );
};
