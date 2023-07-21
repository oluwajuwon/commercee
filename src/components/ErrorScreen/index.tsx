import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import getStyles from './styles';
import {Button} from '../Button';

type ErrorScreenProps = {
  errorMsg: string | undefined;
  hasBtn: boolean;
  btnText: string;
  handleBtnClick: () => void;
};
const ErrorScreen = ({
  errorMsg,
  hasBtn,
  btnText,
  handleBtnClick,
  ...props
}: ErrorScreenProps) => {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} testID="error-screen">
        {errorMsg && (
          <Text style={styles.errorTxt} testID="error-text">
            {errorMsg}
          </Text>
        )}
        {hasBtn && <Button onPress={handleBtnClick} text={btnText} />}
      </View>
    </SafeAreaView>
  );
};

export default ErrorScreen;
