import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ text, textColor, buttonColor, onPress }) {
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
    borderRadius: 50,
    width: 60,
    height: 60

  },
  buttonText: {
    fontSize: 24,
  },
});
