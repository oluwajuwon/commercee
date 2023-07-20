import React, {Fragment, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import getStyles from './styles';
import {useProducts} from '../../hooks/useProducts';
import LoadingScreen from '../../components/LoadingScreen';
import {Product} from '../../components/Product';
import {ProductType} from '../../types/products';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/routes';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

const Home = () => {
  const styles = getStyles();
  const {loading, products} = useProducts();
  const navigation = useNavigation<ScreenNavigationProp>();

  if (loading) {
    return <LoadingScreen />;
  }
  
  const handleSelectProduct = (product: ProductType) => {
    navigation.navigate('Product', {product});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Product product={item} onPress={handleSelectProduct} />
        )}
        keyExtractor={(item: ProductType, index) => item.id?.toString()}
        style={{paddingHorizontal: 5}}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Home;
