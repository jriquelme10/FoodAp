import { View, Text,StyleSheet, ImageBackground,Image } from 'react-native'
import React,{useState} from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CustomInput from '../../components/CustomInput/CustomInput'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import burgerCategory from '../../../Categorias/burger-categorie.jpeg';
import saladCategory from '../../../Categorias/ensalada-categorie.jpeg';
import pizzaCategory from '../../../Categorias/pizza-categorie.jpeg';
import sushiCategory from '../../../Categorias/sushi-categorie.jpeg';

import pizzaCarne from '../../../Comidas/pizza-carne.png';
import pizzaQueso from '../../../Comidas/pizza-queso.png';
import sushi1 from '../../../Comidas/sushi-salmon.png';
import sushi2 from '../../../Comidas/sushi2.png';
import sushi3 from '../../../Comidas/cocacola.png';
import papasFritas from '../../../Comidas/papasfritas.png';
import arosCebolla from '../../../Comidas/arosCebolla.png';
import burger1 from '../../../Comidas/Hamburguesa-tocino-carne.png';
import burger2 from '../../../Comidas/burger2.png';
import burger3 from '../../../Comidas/burger3.png';
import ensalada1 from '../../../Comidas/ensalada.png';
import ensalada2 from '../../../Comidas/ensalada2.png';
import ensalada3 from '../../../Comidas/ensalada3.png';
import cocacola from '../../../Comidas/cocacola.png';
import aguamineralGas from '../../../Comidas/aguamineralGAS.png';




const MenuScreen = () => {
    const {product,setProduct} = useState('');
  return (
    <ScrollView style={styles.container}>
     <View style= {styles.topIcon}>
     <Entypo name= "menu" size={30} color="grey" />
      </View>
      
     <View style={styles.styleBox}>
     <EvilIcons name="search" size={45} color="grey" />
     <View style={{ flex: 1 }}>
     <TextInput
        placeholder="Busca tu plato" value={product} setValue={setProduct}
     />
    </View>
    </View>
    <Text style={styles.title}>Categorias </Text>

     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <ImageBackground 
        imageStyle={{borderRadius:12.0}} 
        style={styles.categoryImage}
        source={burgerCategory}
        >
        <Text style={styles.imageTitle}>Hamburguesas</Text>
     </ImageBackground>
     <ImageBackground 
        imageStyle={{borderRadius:12.0}} 
        style={styles.categoryImage}
        source={sushiCategory}
        >
        <Text style={styles.imageTitle}>Sushis</Text>
     </ImageBackground>
     <ImageBackground 
        imageStyle={{borderRadius:12.0}} 
        style={styles.categoryImage}
        source={pizzaCategory}
        >
        <Text style={styles.imageTitle}>Pizzas</Text>
     </ImageBackground>
     <ImageBackground 
        imageStyle={{borderRadius:12.0}} 
        style={styles.categoryImage}
        source={saladCategory}
        >
        <Text style={styles.imageTitle}>Ensaladas</Text>
     </ImageBackground>
        
    </ScrollView>

    <Text style={[styles.title,{marginBottom:20}]}>Pizzas</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         <View style={{marginLeft:20}}>
         <Image style={styles.productImage} source={pizzaCarne}/>
         </View>
         <View style={{marginLeft:20}}>
         <Image style={styles.productImage} source={pizzaQueso}/>
         </View>
    </ScrollView>

   <Text style={[styles.title,{marginBottom:20}]}>Sushi</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   <View style={{marginLeft:20}}>
   <Image style={styles.productImage} source={sushi1}/>
   </View>
   <View style={{marginLeft:20}}>
   <Image style={styles.productImage} source={sushi2}/>
   </View>
   <View style={{marginLeft:20}}>
   <Image style={styles.productImage} source={sushi3}/>
   </View>
   </ScrollView>

    <Text style={[styles.title,{marginBottom:20}]}>Hamburguesas</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={burger1}/>
     </View>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={burger2}/>
     </View>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={burger3}/>
     </View>
   </ScrollView>
   
   <Text style={[styles.title,{marginBottom:20}]}>Ensaladas</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={ensalada1}/>
     </View>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={ensalada2}/>
     </View>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={ensalada3}/>
     </View>
   </ScrollView>

   <Text style={[styles.title,{marginBottom:20}]}>Acompañantes</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={papasFritas}/>
     </View>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={arosCebolla}/>
     </View>
   </ScrollView>

   <Text style={[styles.title,{marginBottom:20}]}>Bebestibles</Text>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={cocacola}/>
     </View>
     <View style={{marginLeft:20}}>
     <Image style={styles.productImage} source={aguamineralGas}/>
     </View>
   </ScrollView>




    
    
    </ScrollView>


  );
}

const styles = StyleSheet.create({
    container:{
          backgroundColor:"#white",
    },

    title:{
        fontSize: 25,
        fontWeight:"bold",
        marginTop: "10%",
        marginLeft: "4%",
        marginBottom: "0%",
        color: "grey"
    },

    topIcon: {
        height: 120,
        marginHorizontal: 24.0,
        paddingTop: 75,

    },
    productImage:{
        height:180,
        width: 180,
        borderRadius: 10,
       marginBottom: 12.0,
       marginTop: 12.0,
    },
    productText:{
       fontSize: 18,
    },
    imageTitle:{
       color: "white",
       fontSize: 23,
       fontWeight: "900",
       
       },
    categoryImage:{
        height: 100,
        marginLeft: 20,
        width: 200,
        marginTop: "4%",
        justifyContent: "center",
        alignItems: "center",
        elevation: 20,
    },
    styleBox:{
        height: 55,
        width: "85%",
        elevation: 12.0,
        flexDirection: "row",
        marginLeft: "7%",
        alignItems: "center",
        backgroundColor: "white",
    }

});

export default MenuScreen