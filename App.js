import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStackNavigator from "./src/navigator/Navigation";

// eas build -p android --profile preview
export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
