import { View, Text,StyleSheet} from 'react-native'
import React,{useState,useEffect}from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Picker } from "@react-native-picker/picker";
const endpoint = "https://200.120.46.200:8000/api/";

const IngresarCategoriaScreen = () =>{
const {product,setProduct} = useState([]);
  

useEffect(() => {
  (async function () {
    try {
      const response = await fetch(endpoint + 'product', {
        method: "GET",
      });
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log("Error Productos!");
    }
  })();
}, []);






  
   
  return (
  
      <View>
      <Text style={[styles.title,{marginTop:40}]}>INGRESO DE CATEGORIAS</Text>
      <Text style={[styles.txt,{marginTop:50}]}>Ingrese el nombre de la categoria:</Text>
       <CustomInput 
         style={styles.content}
         placeholder="Nombre" 
         value = {nombre}
         setValue = {setNombre}
         />
         <Text style={styles.txt}>Seleccionar imagen:</Text>
         <CustomInput 
         placeholder="" 
         value = {nombre}
         setValue = {setNombre}
         />
        <View style={styles.btn}>
          <CustomButton 
         text={"INGRESAR"}/>
        </View>
         

    </View>
  );
  };
    


const styles = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  },
  root: {
    
    alignItems: 'center',
    padding:20,
},
txt:{
  paddingVertical: 10,
  paddingHorizontal: 10,
  marginHorizontal:40,
  textAlign:'left',
  fontWeight:'bold',
},
content:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
btn:{
  marginTop:40,
  marginLeft:60,
    width:'70%',
    alignItems:'center'
}
})
export default IngresarCategoriaScreen