import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EqualsButton({ text, textColor, buttonColor, onPress,paddingBottom,fontSize}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor, paddingBottom:paddingBottom }]}
      onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor, fontSize:fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 75,
    height: 60,
    paddingRight:1

  },
  buttonText: {
    fontWeight:400,
  },
});
