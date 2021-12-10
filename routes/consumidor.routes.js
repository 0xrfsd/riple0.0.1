import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "../screens/Consumidor/Inicio";

const UsuarioStack = createNativeStackNavigator();

const ConsumidorRoutes = () => {
  return (
    <UsuarioStack.Navigator>
      <UsuarioStack.Screen
        name="Inicio"
        component={Inicio}
        options={{ headerShown: false }}
      />
    </UsuarioStack.Navigator>
  );
};

export default ConsumidorRoutes;
