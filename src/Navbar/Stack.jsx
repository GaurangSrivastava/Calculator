import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Authentication/Components/Login';
import NavBar from './Navigations';
const Stack = createStackNavigator();
export default function MyStack() {
    return (
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Navbar" component={NavBar} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }