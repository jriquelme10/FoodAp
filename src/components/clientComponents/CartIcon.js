import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { CartContext } from "../../screens/ClientScreen/CartContext";

export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 50,
    width: 100,
    marginBottom: 9,
    borderRadius: 20 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    paddingBottom: 15,
    color: "white",
    fontWeight: "bold",
  },
});
