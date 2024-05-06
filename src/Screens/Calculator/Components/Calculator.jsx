import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CalculatorCustomButton from './CalculatorNumpad';
import { useCalculatorFunctions } from '../Functions/CalculatorFunctions';
import EqualsButton from '../../../CommanComponents/CommanButtons/EqualsButton';
import { ColorContext } from '../../../Contexts/ColorContext';
import { useContext} from 'react';
import { OrientationContext } from '../../../Contexts/OrientationContext';
export default function Calculator(){
  const {DarkMode}=useContext(ColorContext);
    const { displayvalue, resultvalue, resultCalculated, handleinput, evalexp, clearall, backspace } = useCalculatorFunctions();
    const {isLandscape} = useContext(OrientationContext);
    return (
        <View style={styles.container}>
             <View style={[isLandscape?styles.displaylandscape:styles.display,DarkMode?styles.displaydark:styles.displaylight]}>
              <Text style={[styles.text, styles.textRight, DarkMode?styles.textdark:styles.textlight,resultCalculated && styles.fade,]}>{displayvalue}</Text>
              {displayvalue !== '0' && (
                <Text style={[styles.result, styles.textRight,DarkMode?styles.textdark:styles.textlight]}>{resultvalue}</Text>
              )}
            </View>
          <View style={[isLandscape?styles.keyboardlandscape:styles.keyboard,DarkMode?styles.keyboarddark:styles.keyboardlight]}>
          {isLandscape && (
            <View style={{flex:1,width:'50%'}}>
            <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
              <CalculatorCustomButton
                text="sin"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('sin')}
              />
              <CalculatorCustomButton
                text="cos"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('cos')}
              />
              <CalculatorCustomButton
                text="tan"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('tan')}
              />
              </View>
              
              <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
              <CalculatorCustomButton
                text="lg"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('lg')}
              />
              <CalculatorCustomButton
                text="ln"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('ln')}
              />
              <CalculatorCustomButton
                text="π"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('π')}
              />
              </View>
              <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
              <CalculatorCustomButton
                text={'1/x'}
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('^(-1)')}
              />
              <CalculatorCustomButton
                text="X!"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('!')}
              />
              <CalculatorCustomButton
                text={'x\u02B8'}
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('^')}
              />
              </View>
              <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
              <CalculatorCustomButton
                text={'sin⁻¹'}
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('sin⁻¹')}
              />
              <CalculatorCustomButton
                text={'cos⁻¹'}
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('cos⁻¹')}
              />
              <CalculatorCustomButton
                text={'tan⁻¹'}
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('tan⁻¹')}
              />
              </View>
              <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
              <CalculatorCustomButton
                text="("
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('(')}
              />
              <CalculatorCustomButton
                text=")"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput(')')}
              />
              <CalculatorCustomButton
                text="&radic;x"
                textColor={DarkMode?'#EB7610':'#B06222'}
                buttonColor={DarkMode?'#2C2B2A':'#EBA962'}
                onPress={() => handleinput('√')}
              />
              </View>
            </View>
          )}
          <View style={{flex:1, width: isLandscape ? '50%' : '100%'}}>
          <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
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
          
          <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
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
          <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
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
          <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
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
            <View style={[styles.rows,{paddingVertical: isLandscape ? 4: 10}]}>
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
       
    },
    displaylandscape:{
      flex: .7,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: 20,
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
      flexDirection:'column'
    },
    keyboardlandscape:{
      flex:2.3,
      width: '100%',
      justifyContent: 'center',
      borderTopWidth: 0.5,
      flexDirection:'row'
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