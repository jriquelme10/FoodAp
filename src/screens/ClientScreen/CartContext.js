import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { URLBASE } from "../../../URL_API";
export const CartContext = createContext();

export function CartProvider(props) {
  const [datos, setDatos] = useState([]);
  const [items, setItems] = useState([]);

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

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        removeItemFromCart,
        getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
