import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    useWindowDimensions
  } from "react-native";
import React,{useState}from 'react'
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Logo from '../../../../assets/images/logo.png';
import { useNavigation } from "@react-navigation/native";

const AddTable = (props) => {

    const { height } = useWindowDimensions();
    const navigatioon = useNavigation();
    const [number_table, setNumber_table] = useState("");
    const onChangeHandler = (numberValue) => {
      setName(numberValue);
    };

    const saveTable = async () => {
        await fetch("http://192.168.0.5:8000/api/mesa", {
           method: "POST",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             number_table: number_table,
             
           }),
         });
       };
  return (
    <View style={styles.root}>
    <Image
      source={Logo}
      style={[styles.logo, { height: height * 0.3 }]}
      resizeMode="contain"
    />
    <Text style={styles.title}> AGREGAR MESAS</Text>
    <TextInput 
    style={styles.input}
    placeholder="Numero de mesa" 
    value={number_table}
     onChangeText={setNumber_table} 
     />
    
    <CustomButton text="Agregar" onPress={saveTable}/>
  </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
      },
    
      logo: {
        width: "100%",
        maxWidth: 200,
        height: 70,
      },
    
      input:{ 
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical : 8,
       
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: "bold",
    },
});
export default AddTable