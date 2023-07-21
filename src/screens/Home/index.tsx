import React from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import getStyles from './styles';
import {useProducts} from '../../hooks/useProducts';
import LoadingScreen from '../../components/LoadingScreen';
import {Product} from '../../components/Product';
import {ProductType} from '../../types/products';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/routes';
import ErrorScreen from '../../components/ErrorScreen';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

export const Home = () => {
  const styles = getStyles();
  const {fetchProducts, loading, products, error} = useProducts();
  const navigation = useNavigation<ScreenNavigationProp>();

  if (loading) {
    return <LoadingScreen />;
  }
  
  if (Boolean(error) && !loading) {
    return (
      <ErrorScreen
        errorMsg={error}
        handleBtnClick={fetchProducts}
        btnText="Refetch Products"
        hasBtn
      />
    );
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
        testID="product-list"
        ListEmptyComponent={
          <View testID="empty-product-list">
            <Text>
              {/** This compoennt would show when there are no products returned from the api */}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};
