import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import getStyles from './styles';

type ButtonProps = {
  isLoading?: boolean;
  isDisabled?: boolean;
  buttonContainerStyles?: ViewStyle;
  buttonTextStyles?: TextStyle;
  onPress: () => void;
  text: string;
};
export const Button = ({
  isLoading,
  isDisabled,
  buttonContainerStyles,
  buttonTextStyles,
  onPress,
  text,
}: ButtonProps) => {
  const styles = getStyles();

  return (
    <TouchableOpacity
      disabled={isLoading === true ? true : isDisabled}
      style={[styles.container, buttonContainerStyles]}
      activeOpacity={0.7}
      onPress={onPress}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
      <Text style={[styles.buttonText, buttonTextStyles]}>{text}</Text>
      {isLoading === true && <ActivityIndicator size="small" color="#fff" />}
    </TouchableOpacity>
  );
};
