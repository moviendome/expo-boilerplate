import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const ExpenseList = ({ expenses }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={expenses}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.description}>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{item.amount}$</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  description: {
    width: "80%",
  },
  amountContainer: {
    width: "20%",
  },
  amount: {
    textAlign: "right",
  },
});

export default ExpenseList;
