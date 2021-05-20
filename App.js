import React from "react";

import { StoreProvider } from "easy-peasy";
import store from "./src/store";

import { NavigationContainer } from "@react-navigation/native";

import App from "./src";

const Main = () => (
  <StoreProvider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </StoreProvider>
);

export default Main;
