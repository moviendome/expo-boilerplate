import React from "react";
import { ExpenseList, MainContainer, TotalAmount } from "../components";

const TodayScreen = () => {
  const expenses = [
    { id: "1", description: "Cafe", amount: 2 },
    { id: "2", description: "Alquiler", amount: 500 },
    { id: "3", description: "Pizza", amount: 10 },
    { id: "4", description: "Tostada de aguacate", amount: 6 },
    { id: "5", description: "Cerveza bien fresquita", amount: 3 },
  ];

  return (
    <MainContainer>
      <TotalAmount amount="1000" />
      <ExpenseList expenses={expenses} />
    </MainContainer>
  );
};

export default TodayScreen;
