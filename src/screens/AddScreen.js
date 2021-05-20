import React, { useState } from "react";

// Importamos Button y TextInput
import { Button, TextInput, StyleSheet, View } from "react-native";
("Text");

// Importamos hooks para las acciones y la navegacion
import { useStoreActions } from "easy-peasy";
import { useNavigation } from "@react-navigation/native";

// Importamos nuestro MainContainer
import { MainContainer } from "../components";

const AddScreen = () => {
  const navigation = useNavigation();
  const add = useStoreActions((actions) => actions.addExpense);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    // Validacion muy simple para no guardar valores
    // invalidos
    if (description != "" && amount != "") {
      // add({ description: description, amount: amount });
      // Mas corto gracias a ES6 y que te explico en la
      // Intro a ES6 para React al final del libro
      add({ description, amount });
      navigation.navigate("Today");
    }
  };

  return (
    <MainContainer>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDescription(text)}
        value={description}
        placeholder="Description"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAmount(text)}
        value={amount}
        placeholder="Amount"
      />
      <Button onPress={() => addExpense()} title="Add" />
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default AddScreen;
