import React from 'react';
import Calculator from '../Screens/Calculator/Components/Calculator';
import WeightConverter from '../Screens/Converters/Weight_Converter/Component/WeightConverter';
import TemperatureConverter from '../Screens/Converters/TempConverters/Components/Components/TemperatureConverter2';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyTabBar } from './NavigationTab';
import SignUp from '../Screens/Authentication/Components/SignUp';

  const Tab = createMaterialTopTabNavigator();

  export default function NavBar() {

    return (
<Tab.Navigator initialRouteName="Calculator" tabBar={props => <MyTabBar {...props} />}>
  <Tab.Screen name="SignUp" component={SignUp} />
  <Tab.Screen name="Calculator" component={Calculator} />
  <Tab.Screen name="Weight Converter" component={WeightConverter} />
  <Tab.Screen name="Temp Converter" component={TemperatureConverter} />
</Tab.Navigator>


    );
  }
