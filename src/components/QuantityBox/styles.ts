import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 15,
      flexDirection: 'row',
    },
    modifierBox: {
      height: 25,
      width: 25,
      borderRadius: 5,
      backgroundColor: '#e667a2',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    textBox: {
      height: 25,
      width: 25,
      borderWidth: 1,
      borderColor: '#cccccc',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 5,
      marginHorizontal: 10,
    },
    txt: {
      fontSize: 14,
      color: '#FFFFFF',
    },
    quantityTxt: {
      fontSize: 12,
    },
  });
};
