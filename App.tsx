import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/Navbar/Navigations';
import MyStack from './src/Navbar/Stack';
import ColorContextProvider from './src/Contexts/ColorContext';
import { OrientationProvider } from './src/Contexts/OrientationContext';
export default function App() {
  return (
    <OrientationProvider>
    <ColorContextProvider>
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    </ColorContextProvider>
    </OrientationProvider>
  );
}