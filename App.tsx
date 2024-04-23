import React, { useState } from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import CustomButton from './src/CustomButton';
export default function App() { 
  const [displayvalue, setdisplayvalue] = useState('0');
  const [resultvalue, setresultvalue] = useState('0');
  const [resultCalculated, setResultCalculated] = useState(false);
  const [repeatop,setrepeatop]=useState(false);
const handleinput=(input:string)=>{
  if(displayvalue==='0'){
    if(input==='+'||input==='-'||input==='/'||input==='*'){
      setdisplayvalue(displayvalue+input);
    }
    else if(input==='%'){
      return;
    }
    else{
    setdisplayvalue(input);
    }
  }

  if (input === '+/-') {
    const lastOperatorIndex = Math.max(displayvalue.lastIndexOf('+'), displayvalue.lastIndexOf('-'), displayvalue.lastIndexOf('*'), displayvalue.lastIndexOf('/'));
    const lastNumber = displayvalue.substring(lastOperatorIndex + 1);
    const updatedNumber = lastNumber.startsWith('-') ? lastNumber.slice(1) : '-' + lastNumber;
    setdisplayvalue(displayvalue.slice(0, lastOperatorIndex + 1) + updatedNumber);
    return;
  }


  if (input === '.' ) {
    const lastOperatorIndex = Math.max(displayvalue.lastIndexOf('+'), displayvalue.lastIndexOf('-'), displayvalue.lastIndexOf('*'), displayvalue.lastIndexOf('/'));
    if (!displayvalue.substring(lastOperatorIndex + 1).includes('.')) {
      setdisplayvalue(displayvalue + '.');
    }
    return;
  }
  if(input==='%'){
    if(repeatop===true){
      return;
    }
    else{
      let percentageValue;
      if (displayvalue.includes('+') || displayvalue.includes('-') || displayvalue.includes('*') || displayvalue.includes('/')) {
      const numbers = displayvalue.split(/[-+*/]/);
      const lastNumber = numbers[numbers.length - 1];
      percentageValue = parseFloat(lastNumber) / 100;
      const updatedExpression = displayvalue.slice(0, -lastNumber.length) + percentageValue;
      setdisplayvalue(updatedExpression);
    } else {
      percentageValue = parseFloat(displayvalue) / 100;
      setdisplayvalue(percentageValue.toString());
    }
    }
  }

  if(input==='+'||input==='-'||input==='/'||input==='*')
    {
      if(repeatop===false){
      setdisplayvalue(displayvalue+input);
      setrepeatop(true);
      }
      else{
        const updatedDisplay = displayvalue.substring(0, displayvalue.length - 1) + input;
        setdisplayvalue(updatedDisplay);
      }
    }
    
  else if(displayvalue!=='0'&&input!=='%')
  {
    if(repeatop===true){
      setrepeatop(false);
    }
      setdisplayvalue(displayvalue+input);
    }
};
const evalexp = () => {
  try {
    if(resultCalculated===false){
    let expression = displayvalue;
    if ('+-*/'.includes(expression[expression.length - 1])) {
      expression = expression.slice(0, -1);
    }
    const result = eval(expression);
    setresultvalue(result.toString());
    setResultCalculated(true);
  }
  else{
    setdisplayvalue(resultvalue);
  }
  } catch(error) {
    console.log(error);
  }
};


const clearall = () => {
  setdisplayvalue('0');
  setresultvalue('0');
  setResultCalculated(false);
  setrepeatop(false);
};

const backspace=()=>{
  if(repeatop===true){
    setrepeatop(false);
  }
  setdisplayvalue(displayvalue.slice(0, -1));
  if (displayvalue.length === 1) {
    setdisplayvalue('0');
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
        text="&#xd7;"
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