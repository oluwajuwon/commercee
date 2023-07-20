import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 15,
      flexDirection: 'row',
    },
    details: {
      paddingLeft: 20,
      width: '70%',
    },
    img: {
      width: '30%',
      height: 140,
      borderWidth: 1,
      borderColor: '#eff6f3',
    },
    price: {
      fontSize: 16,
      fontWeight: '700',
      color: '#e667a2',
    },
    name: {
      fontSize: 12,
      marginBottom: 5,
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
    bottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    removeBtn: {
      height: 30,
      backgroundColor: '#d23757',
    },
  });
};
