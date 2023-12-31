import React, {useRef, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {SingleProduct} from '../screens/SingleProduct';
import {CartBtn} from '../components/CartBtn';
import {Basket} from '../screens/Basket';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={SingleProduct} />
        <Stack.Screen name="Basket" component={Basket} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export const NavContainer = () => {
  return (
    <NavigationContainer>
      {/** I would normally create a tab bar for the bottom and add the cart link there */}
      <CartBtn />
      <Navigator />
    </NavigationContainer>
  );
};
