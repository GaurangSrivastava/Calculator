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
        if(input==='('||input==='√'){
          setdisplayvalue(input);
        }

        if (['sin', 'cos', 'tan', 'lg', 'ln','sin⁻¹','cos⁻¹','tan⁻¹'].includes(input)) {
          setdisplayvalue(input + '(');
          return;
        }
        else if(input==='%'||input==='^'){
          return;
        }
        if(input==='!'){
          setdisplayvalue('0'+input);
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
        if (['sin', 'cos', 'tan', 'lg', 'ln','sin⁻¹','cos⁻¹','tan⁻¹'].includes(input)) {
          setdisplayvalue(displayvalue + input + '(');
          return;
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
        if(expression.includes('^')){
          expression = expression.replace(/\^/g, '**');
        }
        // Add functionality for sin, cos, tan
      expression = expression.replace(/sin\(([^)]+)\)/g, (_, match) => Math.sin(parseFloat(match)));
      expression = expression.replace(/cos\(([^)]+)\)/g, (_, match) => Math.cos(parseFloat(match)));
      expression = expression.replace(/tan\(([^)]+)\)/g, (_, match) => Math.tan(parseFloat(match)));

      // Add functionality for lg (log base 10), ln (log base e)
      expression = expression.replace(/lg\(([^)]+)\)/g, (_, match) => Math.log10(parseFloat(match)));
      expression = expression.replace(/ln\(([^)]+)\)/g, (_, match) => Math.log(parseFloat(match)));

      // Add functionality for pi
      expression = expression.replace(/π/g, Math.PI.toString());

      // Add functionality for 1/x, x!, x^y
      
      expression = expression.replace(/!\(([^)]+)\)/g, (_, match) => {
        let result = 1;
        for (let i = 2; i <= parseFloat(match); i++) {
          result *= i;
        }
        return result;
      });


      // Add functionality for sin^-1, cos^-1, tan^-1
      expression = expression.replace(/sin⁻¹\(([^)]+)\)/g, (_, match) => Math.asin(parseFloat(match)));
expression = expression.replace(/cos⁻¹\(([^)]+)\)/g, (_, match) => Math.acos(parseFloat(match)));
expression = expression.replace(/tan⁻¹\(([^)]+)\)/g, (_, match) => Math.atan(parseFloat(match)));

      // Add functionality for sqrt
      expression = expression.replace(/√(\d+)/g, (_, match) => Math.sqrt(parseFloat(match)));
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
