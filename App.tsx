import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import CustomButton from './src/CustomButton';
export default function App() { 
  const [displayvalue, setdislpayvalue] = useState('0');
  const [resultvalue, setresultvalue] = useState('0');
  const [resultCalculated, setResultCalculated] = useState(false);
const handleinput=(input:string)=>{
  if(displayvalue==='0'){
    setdislpayvalue(input);
  }
  else{
    setdislpayvalue(displayvalue+input);
  }

  if (input === '+/-') {
    setdislpayvalue(displayvalue.startsWith('-') ? displayvalue.slice(1) : '-' + displayvalue);
    return;
  }
  if (input === '.' && displayvalue.includes('.')) {
    return;
  }
};
const evalexp = () => {
  try {
    const result = eval(displayvalue);
    setresultvalue(result.toString());
    setResultCalculated(true);
  } catch(error) {
    console.log(error);
  }
};


const clearall = () => {
  setdislpayvalue('0');
  setresultvalue('0');
  setResultCalculated(false);
};

const backspace=()=>{
  setdislpayvalue(displayvalue.slice(0, -1));
  if (displayvalue.length === 1) {
    setdislpayvalue('0');
  }
  };

return (
  <View style={styles.container}>
       <View style={styles.display}>
        <Text style={[styles.text, styles.textRight, resultCalculated && styles.fade]}>{displayvalue}</Text>
        {displayvalue !== '0' && (
          <Text style={[styles.result, styles.textRight]}>{resultvalue}</Text>
        )}
      </View>
    <View style={styles.keyboard}>
    <View style={styles.rows}>
      <CustomButton
        text="AC"
        textColor="#EB7610"
        buttonColor="#2C2B2A"
        onPress={() => clearall()}
      />
      <CustomButton
        text="&#x232B;"
        textColor="#EB7610"
        buttonColor="#2C2B2A"
        onPress={() => backspace()}
      />
      <CustomButton
        text="%"
        textColor="#EB7610"
        buttonColor="#2C2B2A"
        onPress={() => handleinput('%')}
      />
      <CustomButton
        text="/"
        textColor="#EB7610"
        buttonColor="#2C2B2A"
        onPress={() => handleinput('/')}
      />
    </View>
    <View style={styles.rows}>
      <CustomButton
        text="7"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('7')}
      />
      <CustomButton
        text="8"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('8')}
      />
      <CustomButton
        text="9"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('9')}
      />
      <CustomButton
        text="x"
        textColor="#EB7610"
        buttonColor="#2C2B2A"
        onPress={() => handleinput('*')}
      />
    </View>
    <View style={styles.rows}>
      <CustomButton
        text="4"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('4')}
      />
      <CustomButton
        text="5"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('5')}
      />
      <CustomButton
        text="6"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('6')}
      />
      <CustomButton
        text="-"
        textColor="#EB7610"
        buttonColor="#2C2B2A"
        onPress={() => handleinput('-')}
      />
    </View>
    <View style={styles.rows}>
      <CustomButton
        text="1"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('1')}
      />
      <CustomButton
        text="2"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('2')}
      />
      <CustomButton
        text="3"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('3')}
      />
      <CustomButton
        text="+"
        textColor="#EB7610"
        buttonColor="#2C2B2A"
        onPress={() => handleinput('+')}
      />
    </View>
      <View style={styles.rows}>
      <CustomButton
        text="&#177;"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('+/-')}
      />
      <CustomButton
        text="0"
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('0')}
      />
      <CustomButton
        text="."
        textColor="#fff"
        buttonColor="#5A5554"
        onPress={() => handleinput('.')}
      />
      <CustomButton
        text="="
        textColor="#fff"
        buttonColor="#EB7610"
        onPress={() => evalexp()}
      />
    </View>
    </View>
  </View>
);
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#000', 
  },
  keyboard: {
    flex: 3,
    backgroundColor: '#000',
    width: '100%',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'white'
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
  result: {
    fontSize: 36,
    color: '#fff', // Normal result text color
    textAlign: 'right',
  },
  fade: {
    color: 'grey', // Change display text color when result calculated
  },
});