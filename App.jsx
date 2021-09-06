import {
  TitilliumWeb_400Regular,
  TitilliumWeb_600SemiBold,
  TitilliumWeb_700Bold, useFonts
} from "@expo-google-fonts/titillium-web";
import React from 'react';
import { Rotas } from "./src/routes";


export default function App() {
  useFonts ({
    TitilliumWeb_400Regular,
    TitilliumWeb_600SemiBold,
    TitilliumWeb_700Bold
  });
  
  return (
    <Rotas />
  );
}

