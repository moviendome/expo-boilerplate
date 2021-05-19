import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  TodayScreen,
  WeekScreen,
  MonthScreen,
  AddScreen,
  ModifyScreen,
} from "./screens";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Today">
      <Tab.Screen
        name="Week"
        component={WeekScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-list" size={20} />,
        }}
      />
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          tabBarIcon: () => <Ionicons name="logo-usd" size={20} />,
        }}
      />
      <Tab.Screen
        name="Month"
        component={MonthScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-calendar" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Add" component={AddScreen} />
      <RootStack.Screen name="Modify" component={ModifyScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
