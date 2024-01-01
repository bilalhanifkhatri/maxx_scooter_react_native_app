import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStackNavigator from "./src/navigator/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
