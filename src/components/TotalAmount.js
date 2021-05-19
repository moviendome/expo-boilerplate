import React from "react";
import {Text, View, StyleSheet} from "react-native";

const TotalAmount = ({amount}) => {
  return (
    <Text style={styles.amount}>
      {amount}$
    </Text>
  );
};

const styles = StyleSheet.create({
  amount: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
    paddingVertical: 10
  }
});

export default TotalAmount;
