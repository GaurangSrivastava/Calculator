  import { useState } from 'react';

  export const useCalculatorFunctions = () => {
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

      return { displayvalue, resultvalue, resultCalculated, handleinput, evalexp, clearall, backspace };
  }
