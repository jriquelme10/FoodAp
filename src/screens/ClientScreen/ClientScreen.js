import { View, Text,StyleSheet,Image,useWindowDimensions} from 'react-native'
import React,{useState}from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import Logo from '../../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

const ClientScreen = () => {  
    const {numTable, setNumTable} = useState('');
    const navigatioon = useNavigation();
    const {height} = useWindowDimensions();
    const onSendPressed = () => {
        navigatioon.navigate("MenuOptions");
    }
  return (
    <View style={styles.root}>
    <Image source = {Logo}
         style = {[styles.logo,{ height:height * 0.3}]}
         resizeMode = "contain"
         />
      <Text style={styles.title}> INGRESA EL NÚMERO DE TU MESA </Text>
        <CustomInput
        placeholder="N°de mesa"
        value={numTable}
        setValue={setNumTable}
        />
        <CustomButton
            text="Ingresar"
           onPress={onSendPressed}
           
        />
    </View>
  )
}

const styles = StyleSheet.create({
title:{
    fontSize:20,
    marginBottom: 10,
    fontWeight:'bold'
},
logo: {
    width:"100%",
    maxWidth: 200,
    height:70,
},
root: {
    alignItems: 'center',
    padding:20,
},

})

export default ClientScreen