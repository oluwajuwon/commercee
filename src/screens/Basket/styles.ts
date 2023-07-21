import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 15,
      paddingHorizontal: 17,
    },
    safeArea: {
      flex: 1,
    },
    emptyBasket: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
    },
  });
};
