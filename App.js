import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./context/auth";
import Routes from "./routes";

function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
