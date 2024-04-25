import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './src/Navbar/Navbar';
import ColorContextProvider from './src/Context/ColorContext';
export default function App() {
  return (
    <ColorContextProvider>
    <NavigationContainer>
      <NavBar/>
    </NavigationContainer>
    </ColorContextProvider>
  );
}