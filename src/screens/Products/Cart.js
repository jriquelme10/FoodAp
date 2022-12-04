import React from "react";
import { Text } from "react-native";

export const EjemContext = React.createContext();

export default function Cart() {
  return (
    <EjemContext.Provider value="valor">
      <User1 />
      <User2 />
    </EjemContext.Provider>
  );
}

//ejemplo 1
function User1() {
  const texto = React.useContext(EjemContext);
  return <Text>{texto}</Text>;
}

//ejemplo 2
function User2() {
  return (
    <EjemContext.Consumer>
      {(value) => <Text>{value}</Text>}
    </EjemContext.Consumer>
  );
}
