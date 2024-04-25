import React from 'react';
import Calculator from '../Calculator/Calculator';
import WeightConverter from '../Converters/WeightConverter';
import TemperatureConverter from '../Converters/TemperatureConverter';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyTabBar } from './My Tabbar';

  const Tab = createMaterialTopTabNavigator();

  export default function NavBar() {

    return (
<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  <Tab.Screen name="Calculator" component={Calculator} />
  <Tab.Screen name="Weight Converter" component={WeightConverter} />
  <Tab.Screen name="Temp Converter" component={TemperatureConverter} />
</Tab.Navigator>


    );
  }
