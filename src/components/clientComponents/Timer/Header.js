import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Tiempo de espera",
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 7,
    backgroundColor: "darkslateblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
  },
});

export default Header;
