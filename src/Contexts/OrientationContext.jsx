import React, { createContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const OrientationContext = createContext();

export const OrientationProvider = ({ children }) => {
  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setIsLandscape(Dimensions.get('window').width > Dimensions.get('window').height);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);
    return () => subscription.remove();
  }, []);

  return (
    <OrientationContext.Provider value={{ isLandscape }}>
      {children}
    </OrientationContext.Provider>
  );
};