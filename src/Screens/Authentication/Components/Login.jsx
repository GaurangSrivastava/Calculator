import React,{useState,useContext} from 'react';
import {StyleSheet, Text,TextInput, View,Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../Buttons/CutomButton';
import { ColorContext } from '../../../Contexts/ColorContext';
export default function SignUp(){
    const navigation = useNavigation();
    const {DarkMode}=useContext(ColorContext);
    const [Mail,setMail]=useState("");
    const [Password,setPassword]=useState("");
    const handleLogin = async () => {
        if (Mail === "" || Password === "") {
            Alert.alert('Error', 'Email and Password cannot be blank');
            return;
          }
          try {
            await auth().signInWithEmailAndPassword(Mail, Password);
            Alert.alert('Success', 'User Authenticated');
            navigation.navigate('Calculator');
          } catch (err) {
            console.log(err);
            Alert.alert('Error', err.message);
          }
    };
    
return(

    <View style={[styles.container,{backgroundColor:DarkMode?'black':'#FDF8F4'}]}>
     <Text style={styles.heading}> Login</Text>
     <View style={styles.small}>
       <Text style={styles.text}>Email</Text>
       <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#808080"
        value={Mail}
        onChangeText={setMail} 
       />
       <Text style={styles.text}>Password</Text>
       <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry={true}  
       />
       <CustomButton title="Login" onPress={handleLogin} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerloginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
     </View>


   </View> 
);

}
const styles=StyleSheet.create({
container:{
    flex:1,
    padding:'20%'
},
heading:{
color:'black',
alignSelf:'center',
fontSize:28
},
small:{
    flex:1,
},
text:{
    marginLeft: 12,
    color:'black',
    fontSize:20
},
input: {
    color:'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  footer:{
    alignItems:'center',
    
  },
  footerText:{
    color:'black'
  },
  footerloginText:{
    color:'blue'
  }
})