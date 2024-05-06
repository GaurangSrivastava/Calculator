import { useState } from 'react';

export const useWeightConverterFunctions = () => {
  const [WeightValue, setWeightValue] = useState('0');
  const [WeightInputUnit, setWeightInputUnit] = useState('lbs');
  const [WeightOutputUnit, setWeightOutputUnit] = useState('kg');
  const [ResultWeight, setResultWeight] = useState('0');

  const handleinput = (input) => {
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
  };

  const backspace = () => {
    setWeightValue(WeightValue.slice(0, -1));
    if (WeightValue.length === 1) {
      setWeightValue('0');
    }
};

  const clearall = () => {
    setWeightValue('0');
    setResultWeight('0');
  };

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

  return {
    WeightValue,
    WeightInputUnit,
    WeightOutputUnit,
    ResultWeight,
    handleinput,
    backspace,
    clearall,
    convertWeight,
    setWeightInputUnit,
    setWeightOutputUnit,
  };
};