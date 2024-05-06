import React,{useContext} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { OrientationContext } from '../../Contexts/OrientationContext';
export default function EqualsButton({ text, textColor, buttonColor, onPress,paddingBottom,fontSize}) {
  const {isLandscape} = useContext(OrientationContext);
  return (
    <TouchableOpacity
      style={[styles.button, {height:isLandscape?34:60, backgroundColor: buttonColor, paddingBottom:paddingBottom }]}
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
    paddingRight:1

  },
  buttonText: {
    fontWeight:600,
  },
});
