import { View, Text,StyleSheet, ImageBackground } from 'react-native'
import React,{useState} from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CustomInput from '../../components/CustomInput/CustomInput'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import burgerCategory from '../../../Categorias/burger-categorie.jpeg';
import saladCategory from '../../../Categorias/ensalada-categorie.jpeg';
import pizzaCategory from '../../../Categorias/pizza-categorie.jpeg';
import sushiCategory from '../../../Categorias/sushi-categorie.jpeg';
import Colors from '../../../const/Colors';
import { color } from '@rneui/base';

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
    <Text style={styles.title}>Platos</Text>
    
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
        height: 320,
        width: 260,
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