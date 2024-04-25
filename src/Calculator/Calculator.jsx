import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorCustomButton from '../Buttons/CalculatorCustomButton';
import { useCalculatorFunctions } from './CalculatorFunctions';
import EqualsButton from '../Buttons/EqualsButton';
import { ColorContext } from '../Context/ColorContext';
import { useContext } from 'react';
export default function Calculator(){
  const {DarkMode}=useContext(ColorContext);
    const { displayvalue, resultvalue, resultCalculated, handleinput, evalexp, clearall, backspace } = useCalculatorFunctions();
    return (
        <View style={styles.container}>
             <View style={[styles.display,DarkMode?styles.displaydark:styles.displaylight]}>
              <Text style={[styles.text, styles.textRight, DarkMode?styles.textdark:styles.textlight,resultCalculated && styles.fade,]}>{displayvalue}</Text>
              {displayvalue !== '0' && (
                <Text style={[styles.result, styles.textRight,DarkMode?styles.textdark:styles.textlight]}>{resultvalue}</Text>
              )}
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
              text="%"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => handleinput('%')}
            />
            <CalculatorCustomButton
              text="/"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => handleinput('/')}
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
            <CalculatorCustomButton
              text="&#xd7;"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => handleinput('*')}
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
            <CalculatorCustomButton
              text="-"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => handleinput('-')}
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
            <CalculatorCustomButton
              text="+"
              textColor={DarkMode?'#EB7610':'#B06222'}
              buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
              onPress={() => handleinput('+')}
            />
          </View>
            <View style={styles.rows}>
            <CalculatorCustomButton
              text="&#177;"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('+/-')}
            />
            <CalculatorCustomButton
              text="0"
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#5A5554':'#ECC79E'}
              onPress={() => handleinput('0')}
            />
            <CalculatorCustomButton
              text="."
              textColor={DarkMode?'white':'#733D11'}
              buttonColor={DarkMode?'#2C2B2A':'#ECC79E'}
              onPress={() => handleinput('.')}
            />
            <EqualsButton
              text="="
              textColor='#fff'
              buttonColor={DarkMode?'#D3690B':'#E7963E'}
              onPress={() => evalexp()}
              paddingBottom={1.5}
              fontSize={24}
            />
          </View>
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#FDF8F4'
    },
    display: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: 20,
      backgroundColor: '#000', 
    },
    displaydark:{
      backgroundColor:'black'
    },
    displaylight:{
      backgroundColor:'#FDF8F4'
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
      color: '#fff',
    },
    textdark:{
      color:'white'
    },
    textlight:{
      color:'black'
    },
    textRight: {
      textAlign: 'right',
    },
    result: {
      fontSize: 36,
      color: '#fff',
      textAlign: 'right',
    },
    fade: {
      color: '#6E6863',
    },
  });