import {useState, useEffect} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BasketItemType, ProductType} from '../../types/products';
import getStyles from './styles';
import Like from '../../assets/icons/heart.png';
import {QuantityBox} from '../QuantityBox';
import {Button} from '../Button';

type BasketItemProps = {
  basketItem: BasketItemType;
  addQuantity: (productId: number) => void;
  subtractQuanity: (productId: number) => void;
  removeItem: (productId: number) => void;
};

export const BasketItem = ({
  basketItem,
  addQuantity,
  subtractQuanity,
  removeItem,
}: BasketItemProps) => {
  const {product, quantity} = basketItem;
  const styles = getStyles();
  const imgUrl = product.img.replace('http://', 'https://');
  const {name, colour, price} = product;

  const handleAdd = () => {
    addQuantity(product.id);
  };

  const handleSubtract = () => {
    subtractQuanity(product.id);
  };

  const handleRemove = () => {
    removeItem(product.id);
  };
  
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: imgUrl}}
        style={styles.img}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.productDetailTop}>
          <Text style={styles.price}>£{price}</Text>
          <Image source={Like} style={styles.like} />
        </View>
        <View style={styles.bottom}>
          <QuantityBox
            handleAdd={handleAdd}
            quantity={quantity}
            handleSubtract={handleSubtract}
          />
          <Button
            text="Remove"
            onPress={handleRemove}
            buttonContainerStyles={styles.removeBtn}
          />
        </View>
        <View
          style={[
            styles.colour,
            {
              backgroundColor: `${colour.toLowerCase()}`,
            },
          ]}
        />
      </View>
    </View>
  );
};
