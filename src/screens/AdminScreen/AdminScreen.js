import { View, Text,StyleSheet,ScrollView} from 'react-native'
import React,{useState,useEffect}from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AdminScreen = () => {
  const navigatioon = useNavigation();

  const onIngresarProducto = ()=>{
    navigatioon.navigate('IngresarProducto');
  }
  const onIngresarCategoria = ()=>{
    navigatioon.navigate('IngresarCategoria');
  }
   
  return (
    <View styles={styles.content}>
      <Text style={styles.texto}>PANEL DEL ADMINISTRADOR</Text>

      <View style={styles.btn}>
      <CustomButton text={'Ingresar producto'} onPress={onIngresarProducto} />
      </View>

      <View style={styles.btn}>
      <CustomButton text={'Ingresar categoria'} onPress={onIngresarCategoria}/>
      </View>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  texto:{
    paddingTop:100,
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    alignItems:'center',
    marginBottom:20,
  },
  content:{
    alignContent:'center',
    justifyContent:'center',
  },
  btn:{
    marginLeft:60,
    width:'70%',
    alignItems:'center'
  }

})
export default AdminScreen