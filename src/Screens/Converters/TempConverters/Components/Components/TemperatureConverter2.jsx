import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import ConveterNumpad from '../../../Components/ConverterNumpad';
import EqualsButton from '../../../../../CommanComponents/CommanButtons/EqualsButton';
import { ColorContext } from '../../../../../Contexts/ColorContext';
import { useTemperatureConverterFunctions } from '../Functions/TemperatureConveterFunctions';

const TemperatureConverter = () => {
  const { DarkMode } = useContext(ColorContext);
  const {
    TemperatureValue,
    TemperatureInputUnit,
    TemperatureOutputUnit,
    TemperatureResult,
    handleinput,
    backspace,
    clearall,
    convertTemperature,
    setTemperatureInputUnit,
    setTemperatureOutputUnit,
  } = useTemperatureConverterFunctions();

  return (
    <View style={[styles.container, DarkMode ? styles.containerDark : styles.containerLight]}>
      <View style={styles.inputdisplay}>
        <View style={styles.inputcontainer}>
          <Picker
            selectedValue={TemperatureInputUnit}
            style={[styles.picker, DarkMode ? styles.pickerdark : styles.pickerlight]}
            onValueChange={(itemValue, itemIndex) => setTemperatureInputUnit(itemValue)}>
            <Picker.Item label="Celsius (°C)" value="°C" />
            <Picker.Item label="Fahrenheit (°F)" value="°F" />
            <Picker.Item label="Kelvin (K)" value="K" />
          </Picker>
          <Text style={[styles.value, DarkMode ? styles.valuedark : styles.valuelight]}>
            {TemperatureValue} {TemperatureInputUnit}
          </Text>
        </View>
        <View style={styles.outputcontainer}>
          <Picker
            selectedValue={TemperatureOutputUnit}
            style={[styles.picker, DarkMode ? styles.pickerdark : styles.pickerlight]}
            onValueChange={(itemValue, itemIndex) => setTemperatureOutputUnit(itemValue)}>
            <Picker.Item label="Celsius (°C)" value="°C" />
            <Picker.Item label="Fahrenheit (°F)" value="°F" />
            <Picker.Item label="Kelvin (K)" value="K" />
          </Picker>
          <Text style={[styles.value, DarkMode ? styles.valuedark : styles.valuelight]}>
            {TemperatureResult} {TemperatureOutputUnit}
          </Text>
        </View>
      </View>
      <View style={[styles.keyboard, DarkMode ? styles.keyboarddark : styles.keyboardlight]}>
        <View style={styles.rows}>
          <ConveterNumpad
            text="AC"
            textColor={DarkMode ? '#EB7610' : '#B06222'}
            buttonColor={DarkMode ? '#2C2B2A' : '#EBA962'}
            onPress={() => clearall()}
          />
          <ConveterNumpad
            text="&#x232B;"
            textColor={DarkMode ? '#EB7610' : '#B06222'}
            buttonColor={DarkMode ? '#2C2B2A' : '#EBA962'}
            onPress={() => backspace()}
          />
          <ConveterNumpad
            text="&#177;"
            textColor={DarkMode ? '#EB7610' : '#B06222'}
            buttonColor={DarkMode ? '#2C2B2A' : '#EBA962'}
            onPress={() => handleinput('+/-')}
          />
        </View>
        <View style={styles.rows}>
          {[7, 8, 9].map((num) => (
            <ConveterNumpad
              key={num}
              text={num.toString()}
              textColor={DarkMode ? 'white' : '#733D11'}
              buttonColor={DarkMode ? '#2C2B2A' : '#ECC79E'}
              onPress={() => handleinput(num.toString())}
            />
          ))}
        </View>
        <View style={styles.rows}>
          {[4, 5, 6].map((num) => (
            <ConveterNumpad
              key={num}
              text={num.toString()}
              textColor={DarkMode ? 'white' : '#733D11'}
              buttonColor={DarkMode ? '#2C2B2A' : '#ECC79E'}
              onPress={() => handleinput(num.toString())}
            />
          ))}
        </View>
        <View style={styles.rows}>
          {[1, 2, 3].map((num) => (
            <ConveterNumpad
              key={num}
              text={num.toString()}
              textColor={DarkMode ? 'white' : '#733D11'}
              buttonColor={DarkMode ? '#2C2B2A' : '#ECC79E'}
              onPress={() => handleinput(num.toString())}
            />
          ))}
        </View>
        <View style={styles.rows}>
          <ConveterNumpad
            text="0"
            textColor={DarkMode ? 'white' : '#733D11'}
            buttonColor={DarkMode ? '#2C2B2A' : '#ECC79E'}
            onPress={() => handleinput('0')}
          />
          <ConveterNumpad
            text="."
            textColor={DarkMode ? 'white' : '#733D11'}
            buttonColor={DarkMode ? '#2C2B2A' : '#ECC79E'}
            onPress={() => handleinput('.')}
          />
          <EqualsButton
            text="&#8652;"
            textColor="#fff"
            buttonColor={DarkMode ? '#D3690B' : '#E7963E'}
            onPress={() => convertTemperature()}
            paddingBottom={9}
            fontSize={33}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'black'
  },
  containerDark:{
    backgroundColor:'black',
  },
  containerLight:{
    backgroundColor:'#FDF8F4'
  },
  inputdisplay:{
    flex:1,
    width:'100%',
    padding:7,
    paddingBottom:13,
    marginTop:20,

  },
  inputcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  outputcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  value: {
    fontSize: 26,
    textAlign: 'right',
  },
  valuedark:{
    color:'white'
  },
  valuelight:{
    color:'black'
  },
  picker:{
    height: 50,
    width: 150,
  },
  pickerdark:{
    color:'white'
  },
  pickerlight:{
    color:'black'
  },
  keyboard: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    
  },
  keyboarddark:{
    backgroundColor: 'black',
    borderTopColor: 'white'
  },
  keyboardlight:{
    backgroundColor:'#FDF8F4',
    borderTopColor: 'black'
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  text: {
    fontSize: 36,
    color: '#fff', // Default text color
  },
  textRight: {
    textAlign: 'right',
  },
  TemperatureResult: {
    fontSize: 36,
    color: '#fff', // Normal TemperatureResult text color
    textAlign: 'right',
  },
  fade: {
    color: 'grey', // Change input text color when TemperatureResult calculated
  },
});

export default TemperatureConverter;
