import {Image, View, Text, TouchableOpacity} from 'react-native';
import getStyles from './styles';

type QuantityBoxProps = {
  quantity: number;
  handleAdd: () => void;
  handleSubtract: () => void;
};

export const QuantityBox = ({
  quantity,
  handleAdd,
  handleSubtract,
}: QuantityBoxProps) => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSubtract} style={styles.modifierBox}>
        <Text style={styles.txt}>{'-'}</Text>
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.quantityTxt}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={handleAdd} style={styles.modifierBox}>
        <Text style={styles.txt}>{'+'}</Text>
      </TouchableOpacity>
    </View>
  );
};
