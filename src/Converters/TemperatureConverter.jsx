import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CalculatorCustomButton from '../Buttons/CalculatorCustomButton';
import EqualsButton from '../Buttons/EqualsButton';
import { ColorContext } from '../Context/ColorContext';
const TemperatureConverter = () => {
  const [TemperatureValue, setTemperatureValue] = useState('0');
  const [TemperatureInputUnit, setTemperatureInputUnit] = useState('°C');
  const [TemperatureOutputUnit, setTemperatureOutputUnit] = useState('°F');
  const [TemperatureResult, setTemperatureResult] = useState('0');
  const {DarkMode}=useContext(ColorContext);
  const handleinput=(input)=>{
    if(TemperatureValue==='0'){
      if(input==='+/-'){
        return;
      }
      else{
      setTemperatureValue(input);
      }
    }

    if(input==='.'){
       if(TemperatureValue.includes('.')){
         return;
        }
       else{
        setTemperatureValue(TemperatureValue+'.')
        }
    } 
    if(input==='+/-'){
      if(TemperatureInputUnit==='K'){
        return;
      }
      else{
        setTemperatureValue((prevTemperatureValue) => (parseFloat(prevTemperatureValue) * -1).toString());
      }
    }
    else if(TemperatureValue!=='0'&&input!=='+/-'){
      setTemperatureValue(TemperatureValue+input);
    }
  }
  
  const backspace=()=>{
    setTemperatureValue(TemperatureValue.slice(0, -1));
    if (TemperatureValue.length === 1) {
      setTemperatureValue('0');
    }
  }

  const clearall=()=>{
    setTemperatureValue('0');
    setTemperatureResult('0');
  }

  const convertTemperature = () => {
    let temperature;
    switch (TemperatureInputUnit) {
      case '°C':
        temperature = parseFloat(TemperatureValue);
        break;
      case '°F':
        temperature = (parseFloat(TemperatureValue) - 32) / 1.8;
        break;
      case 'K':
        temperature = parseFloat(TemperatureValue) - 273.15;
        break;
      default:
        temperature = parseFloat(TemperatureValue);
        break;
    }

    let convertedTemperature;
    switch (TemperatureOutputUnit) {
      case '°C':
        convertedTemperature = temperature;
        break;
      case '°F':
        convertedTemperature = temperature * 1.8 + 32;
        break;
      case 'K':
        convertedTemperature = temperature + 273.15;
        break;
      default:
        convertedTemperature = temperature;
        break;
    }

    setTemperatureResult(convertedTemperature.toFixed(2));
  };

  return (
    <View style={[styles.container,DarkMode?styles.containerDark:styles.containerLight]}>
    <View style={styles.inputdisplay}>
    <View style={styles.inputcontainer}>
        <Picker
          selectedValue={TemperatureInputUnit}
          style={[styles.picker,DarkMode?styles.pickerdark:styles.pickerlight]}
          onValueChange={(itemValue, itemIndex) => setTemperatureInputUnit(itemValue)}>
          <Picker.Item label="Celsius (°C)" value="°C" />
            <Picker.Item label="Fahrenheit (°F)" value="°F" />
            <Picker.Item label="Kelvin (K)" value="K" />
        </Picker>
      <Text style={[styles.value,DarkMode?styles.valuedark:styles.valuelight]}>{TemperatureValue} {TemperatureInputUnit}</Text>

        
     </View>
     <View style={styles.outputcontainer}>
        <Picker
          selectedValue={TemperatureOutputUnit}
          style={[styles.picker,DarkMode?styles.pickerdark:styles.pickerlight]}
          onValueChange={(itemValue, itemIndex) => setTemperatureOutputUnit(itemValue)}>
          <Picker.Item label="Celsius (°C)" value="°C" />
            <Picker.Item label="Fahrenheit (°F)" value="°F" />
            <Picker.Item label="Kelvin (K)" value="K" />
        </Picker>
        <Text style={[styles.value,DarkMode?styles.valuedark:styles.valuelight]}>{TemperatureResult} {TemperatureOutputUnit}</Text>
    </View>
    </View>
    <View style={[styles.keyboard,DarkMode?styles.keyboarddark:styles.keyboardlight]}>
          <View style={styles.rows}>

            <CalculatorCustomButton
              text="AC"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => clearall()}
            />
            <CalculatorCustomButton
              text="&#x232B;"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => backspace()}
            />
            <CalculatorCustomButton
              text="&#177;"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => handleinput('+/-')}
            />
          </View>
          <View style={styles.rows}>
            <CalculatorCustomButton
              text="7"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('7')}
            />
            <CalculatorCustomButton
              text="8"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('8')}
            />
            <CalculatorCustomButton
              text="9"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('9')}
            />
          </View>
          <View style={styles.rows}>
            <CalculatorCustomButton
              text="4"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('4')}
            />
            <CalculatorCustomButton
              text="5"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('5')}
            />
            <CalculatorCustomButton
              text="6"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('6')}
            />
          </View>
          <View style={styles.rows}>
            <CalculatorCustomButton
              text="1"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('1')}
            />
            <CalculatorCustomButton
              text="2"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('2')}
            />
            <CalculatorCustomButton
              text="3"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('3')}
            />
          </View>
            <View style={styles.rows}>
            <CalculatorCustomButton
              text="0"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('0')}
            />
            <CalculatorCustomButton
              text="."
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('.')}
            />
            <EqualsButton
              text="&#8652;"
              textColor='#fff'
              buttonColor={DarkMode?'#D3690B':'#E7963E'}
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
