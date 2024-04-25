import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CalculatorCustomButton from '../Buttons/CalculatorCustomButton';
import ConverterCustomButton from '../Buttons/ConveterCustomButton';
import EqualsButton from '../Buttons/EqualsButton';
import { ColorContext } from '../Context/ColorContext';
const WeightConverter = () => {
  const [WeightValue, setWeightValue] = useState('0');
  const [WeightInputUnit, setWeightInputUnit] = useState('lbs');
  const [WeightOutputUnit, setWeightOutputUnit] = useState('kg');
  const [ResultWeight, setResultWeight] = useState('0');
  const {DarkMode}=useContext(ColorContext);
  const handleinput=(input)=>{
    if(WeightValue==='0'){
      setWeightValue(input);
    }
    if(input==='.'){
    if(WeightValue.includes('.')){
      return;
    }
    else{
      setWeightValue(WeightValue+'.')
    }
    }
    else if(WeightValue!=='0'){
      setWeightValue(WeightValue+input);
    }
  }
  
  const backspace=()=>{
    setWeightValue(WeightValue.slice(0, -1));
    if (WeightValue.length === 1) {
      setWeightValue('0');
    }
  }

  const clearall=()=>{
    setWeightValue('0');
    setResultWeight('0');
  }

  const convertWeight = () => {
    let weightInPounds;
    switch (WeightInputUnit) {
      case 'lbs':
        weightInPounds = parseFloat(WeightValue);
        break;
      case 'kg':
        weightInPounds = parseFloat(WeightValue) * 2.20462;
        break;
      case 'gm':
        weightInPounds = parseFloat(WeightValue) * 0.00220462;
        break;
      default:
        weightInPounds = parseFloat(WeightValue);
        break;
    }

    let convertedWeight;

    switch (WeightOutputUnit) {
      case 'lbs':
        convertedWeight = weightInPounds;
        break;
      case 'kg':
        convertedWeight = weightInPounds / 2.20462;
        break;
      case 'gm':
        convertedWeight = weightInPounds / 0.00220462;
        break;
      default:
        convertedWeight = weightInPounds;
        break;
    }
     setResultWeight(convertedWeight.toFixed(3));
  };

  return (
    <View style={[styles.container,DarkMode?styles.containerDark:styles.containerLight]}>
    <View style={styles.inputdisplay}>
    <View style={styles.inputcontainer}>
    
        <Picker
          selectedValue={WeightInputUnit}
          style={[styles.picker,DarkMode?styles.pickerdark:styles.pickerlight]}
          onValueChange={(itemValue, itemIndex) => setWeightInputUnit(itemValue)}>
          <Picker.Item label="Pounds" value="lbs" />
          <Picker.Item label="Kilograms" value="kg" />
          <Picker.Item label="Grames" value="gm" />
        </Picker>
      <Text style={[styles.value,DarkMode?styles.valuedark:styles.valuelight]}>{WeightValue} {WeightInputUnit}</Text>

        
     </View>
     <View style={styles.outputcontainer}>
        <Picker
          selectedValue={WeightOutputUnit}
          style={[styles.picker,DarkMode?styles.pickerdark:styles.pickerlight]}
          onValueChange={(itemValue, itemIndex) => setWeightOutputUnit(itemValue)}>
          <Picker.Item label="Pounds" value="lbs" />
          <Picker.Item label="Kilograms" value="kg" />
          <Picker.Item label="Grams " value="gm" />
        </Picker>
        <Text style={[styles.value,DarkMode?styles.valuedark:styles.valuelight]}>{ResultWeight} {WeightOutputUnit}</Text>
    </View>
    </View>
    <View style={[styles.keyboard,DarkMode?styles.keyboarddark:styles.keyboardlight]}>
          <View style={styles.row1}>
            <ConverterCustomButton
              text="AC"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => clearall()}
            />
            <ConverterCustomButton
              text="&#x232B;"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => backspace()}
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
              onPress={() => convertWeight()}
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
    color:'white',
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
    color:'white',
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
    backgroundColor: '#000',
    width: '100%',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'white'
  },
  keyboarddark:{
    backgroundColor: 'black',
    borderTopColor: 'white'
  },
  keyboardlight:{
    backgroundColor:'#FDF8F4',
    borderTopColor: 'black'
  },
  row1:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    padding:20
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
  ResultWeight: {
    fontSize: 36,
    color: '#fff', // Normal ResultWeight text color
    textAlign: 'right',
  },
  fade: {
    color: 'grey', // Change input text color when ResultWeight calculated
  },
});

export default WeightConverter;
