import { View, Text ,StyleSheet,Button} from 'react-native'
import React,{useState}from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const URL = "http://127.0.0.1:8000/api/";

const IngresarProductoScreen = (props) => {
    const [product,setProduct] = useState("");
    const [category,setCategory] = useState("");
    const [IDcategory,setIDCategory] = useState("");
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [code,setCode] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [stock,setStock] = useState("");

    const {modalVisible} = props;
    const {setModalVisible} = props;
    const {category:categoryobj} = props;

    const {products} = props;
    const {setProducts} = props;
    const {product: productOBJ} = props;
    const {setProduct:setProductOBJ} = props;

    useEffect(() => {
      (async function() {
        try {
          const response = await fetch(URL + "category",{
            method:"GET",
          });
          const data = await response.json();
          setCategory(data);
        } catch (error) {
          console.log("Error en la carga de categorias.")
          
        }
      });
    }, [])
    
    






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