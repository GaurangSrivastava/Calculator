import {View, TouchableOpacity,Text,Switch } from 'react-native';
import { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalculator, faScaleBalanced, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { ColorContext } from '../Context/ColorContext';
export const MyTabBar = ({ state, navigation }) => {
  const ColorContextValue=useContext(ColorContext);
  const {DarkMode, setDarkMode} = ColorContextValue;
  const toggleSwitch = () => setDarkMode(previousState => !previousState);
  const getIcon = (routeName) => {
    switch (routeName) {
      case 'Calculator':
        return faCalculator;
      case 'Weight Converter':
        return faScaleBalanced;
      case 'Temp Converter':
        return faTemperatureLow;
      default:
        return faCalculator;
    }
  };

    return (
      <View style={{ backgroundColor:DarkMode?'black':'#FAF9F7',flexDirection: 'row', justifyContent:'space-around', height:50}}>
        {state.routes.map((route, index) => {
          const icon = getIcon(route.name);
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          
          return (
            <TouchableOpacity
              onPress={onPress}
              style={{paddingTop:14, alignItems:'center'}}
            >
            <FontAwesomeIcon icon={icon} size={25} color={isFocused ? (DarkMode ? '#C96A16' : '#D3690B') : (DarkMode ? '#A0968C' : '#A6998D') } />
              
            </TouchableOpacity>
          );
        })}
        <Switch
          trackColor={{ false: "#A6998D", true: "#D6C7B7" }}
          thumbColor={DarkMode ? "#C96A16" : "#DDDCDB"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={DarkMode}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.11 }] }} 
        />
      </View>
    );
  }