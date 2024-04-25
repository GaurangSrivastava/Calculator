import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ConverterCustomButton({ text, textColor, buttonColor, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 150,
    height: 60,
    paddingBottom:1.5,
    paddingRight:1

  },
  buttonText: {
    fontSize: 25,
    fontWeight:400,
  },
});
