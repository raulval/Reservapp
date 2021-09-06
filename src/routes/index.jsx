import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { AutorizarRotas } from "./auth.routes";

export function Rotas() {
  return(
    <NavigationContainer>
      <AutorizarRotas />
    </NavigationContainer>
  );
}