import React,{useContext} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { OrientationContext } from '../../../Contexts/OrientationContext';
export default function CalculatorCustomNumpad({ text, textColor, buttonColor, onPress }) {
  const {isLandscape}=useContext(OrientationContext);
  return (
    <TouchableOpacity
      style={[styles.button, { height:isLandscape?34:60, backgroundColor: buttonColor }]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {fontSize:isLandscape?22:26, color: textColor }]}>{text}</Text>
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
    paddingBottom:1.5,
    paddingRight:1

  },
  buttonText: {
    fontWeight:500,
  },
});
