import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 15,
      paddingHorizontal: 12,
    },
    safeArea: {
      flex: 1,
    },
    img: {
      width: '100%',
      height: 219,
      borderWidth: 1,
      borderColor: '#eff6f3',
    },
    price: {
      fontSize: 14,
      fontWeight: '700',
      color: '#e667a2',
    },
    name: {
      fontSize: 12,
      minHeight: 50,
    },
    productDetailTop: {
      paddingVertical: 3,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    like: {
      height: 15,
      width: 15,
    },
    colour: {
      width: 15,
      height: 15,
      borderWidth: 1,
      borderRadius: 15,
      // marginTop: 10,
    },
  });
};
