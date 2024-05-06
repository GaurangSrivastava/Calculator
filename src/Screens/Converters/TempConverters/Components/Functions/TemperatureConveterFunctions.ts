import { useState } from 'react';

export const useTemperatureConverterFunctions = () => {
  const [TemperatureValue, setTemperatureValue] = useState('0');
  const [TemperatureInputUnit, setTemperatureInputUnit] = useState('°C');
  const [TemperatureOutputUnit, setTemperatureOutputUnit] = useState('°F');
  const [TemperatureResult, setTemperatureResult] = useState('0');

  const handleinput = (input) => {
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
  };

  const backspace = () => {
    setTemperatureValue(TemperatureValue.slice(0, -1));
    if (TemperatureValue.length === 1) {
      setTemperatureValue('0');
    }
  };

  const clearall = () => {
    setTemperatureValue('0');
    setTemperatureResult('0');
  };

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

  return {
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
  };
};