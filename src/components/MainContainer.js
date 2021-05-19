import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

const MainContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 20,
  },
});

export default MainContainer;
