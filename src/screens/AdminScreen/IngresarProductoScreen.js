import { View, Text ,StyleSheet,Button} from 'react-native'
import React,{useState}from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const IngresarProductoScreen = () => {
    const {codigo,setCodigo} = useState('');
    const {nombre,setNombre} = useState('');
    const {precio,setPrecio} = useState('');
    const {descripcion,setDescripcion} = useState('');
    const {categoria,setCategoria} = useState('');
  return (
  
      <View>
      <Text style={[styles.title,{marginTop:40}]}>INGRESO DE PRODUCTOS</Text>
      <Text style={[styles.txt,{marginTop:50}]}>Ingrese el codigo:</Text>
       <CustomInput 
         style={styles.content}
         placeholder="codigo" 
         value = {codigo}
         setValue = {setCodigo}
         />
         <Text style={styles.txt}>Ingrese el nombre del producto:</Text>
         <CustomInput 
         placeholder="nombre" 
         value = {nombre}
         setValue = {setNombre}
         />
         <Text style={styles.txt}>Ingrese el precio del producto:</Text>
         <CustomInput  
         placeholder="precio" 
         value = {precio}
         setValue = {setPrecio}
         />
         <Text style={styles.txt}>Ingrese la descripcion del producto:</Text>
         <CustomInput 
         placeholder="descripcion" 
         value = {descripcion}
         setValue = {setDescripcion}
         
         />
        <View style={styles.btn}>
          <CustomButton 
         text={"INGRESAR"}/>
        </View>
         

    </View>
  )
}

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

export default IngresarProductoScreen