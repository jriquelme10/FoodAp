import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { URLBASE } from "../../../URL_API";

export const CartContext = createContext();

export function CartProvider(props) {
  const [datos, setDatos] = useState([]);
  const [items, setItems] = useState([]);
  const [enviado, setEnviado] = useState(false);
  const [idOrden, setIdOrden] = useState();
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const navigation = useNavigation();
  const [number_table, setNumber_table] = useState(1);
  // const [idOrden, setIdOrden] = useState();

  const addItemToCart = async (id) => {
    const { data } = await axios.get(`${URLBASE}` + `/api/plato/${id}`);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            data,
            totalPrice: data.precio,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += data.precio;
          }
          return item;
        });
      }
    });
  };

  const removeItemFromCart = async (id) => {
    const { data } = await axios.get(`${URLBASE}` + `/api/plato/${id}`);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (item.qty == 1) {
        return prevItems.filter((item) => item.id != id);
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty--;
            item.totalPrice -= data.precio;
          }
          return item;
        });
      }
    });
  };

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  const AlertInsert = (variable) =>
    Alert.alert("Ingreso de Orden", variable, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const enviarPedido = async () => {
    // console.log("enviar pedido");
    // console.log("TotalAmount:" + getTotalPrice());
    // for (let i = 0; i < items.length; i++) {
    //   console.log("Producto " + i + " " + items[i].data.nombre);
    // }

    const formData = new FormData();

    formData.append("totalAmount", getTotalPrice());
    formData.append("number_table", 1);
    formData.append("status", "PENDIENTE");

    try {
      const { data } = await axios.post(`${URLBASE}` + "/api/order", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
      if (!data.isSuccess) {
        alert("Error en agregar");
        return;
      }
      for (let i = 0; i < items.length; i++) {
        saveOrdenProduct(i, data.idOrden);
      }
      AlertInsert("El pedido fue enviado");
      setItems([]);
      setPedidoEnviado(true);
      setIdOrden(data.idOrden);
    } catch (err) {
      console.error(err.response.data);
      AlertInsert("Error de servidor, la orden no ha sido ingresada");
    } finally {
    }
  };

  saveOrdenProduct = async (num, idOrden) => {
    const formData = new FormData();
    formData.append("quantity", items[num].qty);
    formData.append("product_id", items[num].data.id);
    formData.append("order_id", idOrden);

    try {
      const { data } = await axios.post(
        `${URLBASE}` + "/api/orderProduct",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (!data.isSuccess) {
        alert("Error en agregar");
        return;
      }
    } catch (err) {
      console.error(err.response.data);
      AlertInsert("Error de servidor, la orden no ha sido ingresada");
    } finally {
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        removeItemFromCart,
        getTotalPrice,
        enviarPedido,
        pedidoEnviado,
        idOrden,
        setPedidoEnviado,
        number_table,
        setNumber_table,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
