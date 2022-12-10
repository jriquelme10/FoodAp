import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import { CartContext } from "./CartContext";
export function Cart({ navigation }) {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);
  const [cantidad, setCantidad] = useState();
  const { removeItemFromCart } = useContext(CartContext);
  const { addItemToCart } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>
      </View>
    );
  }

  function quitarProducto(id) {
    console.log("ID:" + id);
    // addItemToCart(id);
  }

  function actualizar(cant) {
    console.log(cant);
    setCantidad(cant);
  }

  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.data.nombre} x {item.qty}
        </Text>
        <Button title="+" onPress={() => addItemToCart(item.id)} />
        <Button title="-" onPress={() => removeItemFromCart(item.id)} />
        <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        //renderItem={({ item }) => <ProductosCarro item={item} />}
        //extraData={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.data.id.toString()}
        ListFooterComponent={Totals}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
