import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Card from "../../components/Card";
import { FlatList } from "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cart from "./Cart";
import MenuScreen3 from "./MenuScreen3";
import MenuScreen4 from "./MenuScreen4";

export const EjemContext = React.createContext();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const URL = "http://192.168.1.189:8000/api/platos";

export default function MenuScreen2() {
  const image = {
    uri: "https://cdn-icons-png.flaticon.com/512/308/308833.png",
  };
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Productos" component={MenuScreen3} />
        <Tab.Screen name="Categorias" component={MenuScreen4} />
        <Tab.Screen
          name="Carro"
          component={Cart}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/308/308833.png",
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
