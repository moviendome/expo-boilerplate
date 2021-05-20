import React from "react";
import { Button } from "react-native";
import { useStoreState } from "easy-peasy";
import { useNavigation } from "@react-navigation/native";
import { ExpenseList, MainContainer, TotalAmount } from "../components";

const TodayScreen = () => {
  const navigation = useNavigation();
  const expenses = useStoreState((state) => state.expenses);

  return (
    <MainContainer>
      <TotalAmount amount="1000" />
      <ExpenseList expenses={expenses} />
      <Button onPress={() => navigation.navigate("Add")} title="Add" />
    </MainContainer>
  );
};
export default TodayScreen;
