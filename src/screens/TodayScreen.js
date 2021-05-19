import React from "react";
import {StyleSheet, Text, View} from "react-native";

const TodayScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Today Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TodayScreen;
