import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { tema } from "../global/styles/tema";
import { CadastrarAmbiente } from "../screens/CadastrarAmbiente";
import { Cadastro } from "../screens/Cadastro";
import { EditarAmbiente } from "../screens/EditarAmbiente";
import { Home } from "../screens/Home";
import { HomeAdmin } from "../screens/HomeAdmin";
import { Login } from "../screens/Login";
import { Perfil } from "../screens/Perfil";
import { Reservar } from "../screens/Reservar";
import { Reservar2 } from "../screens/Reservar2";
import { SucessoAmbiente } from "../screens/Sucesso/Ambiente";
import { SucessoCad } from "../screens/Sucesso/Cad";
import { SucessoReserva } from "../screens/Sucesso/Reserva";

const { Navigator, Screen } = createStackNavigator();

export function AutorizarRotas() {
  return (
    <Navigator headerMode="screen" initialRouteName="Login">
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: "Criar Conta",
          headerStyle: {
            backgroundColor: tema.cores.secundaria,
          },
          headerTintColor: tema.cores.textos,
          headerTitleStyle: {
            fontFamily: tema.fontes.texto700,
            fontSize: 25,
            paddingLeft: 68,
          },
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SucessoCad"
        component={SucessoCad}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Reservar"
        component={Reservar}
        options={{
          title: "Nova Reserva",
          headerStyle: {
            backgroundColor: tema.cores.primaria,
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontFamily: tema.fontes.texto700,
            fontSize: 25,
            paddingLeft: 50,
          },
        }}
      />
      <Screen
        name="Reservar2"
        component={Reservar2}
        options={{
          title: "Nova Reserva",
          headerStyle: {
            backgroundColor: tema.cores.primaria,
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontFamily: tema.fontes.texto700,
            fontSize: 25,
            paddingLeft: 50,
          },
        }}
      />
      <Screen
        name="SucessoReserva"
        component={SucessoReserva}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="HomeAdmin"
        component={HomeAdmin}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CadastrarAmbiente"
        component={CadastrarAmbiente}
        options={{
          title: "Novo Ambiente",
          headerStyle: {
            backgroundColor: tema.cores.primaria,
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontFamily: tema.fontes.texto700,
            fontSize: 25,
            paddingLeft: 50,
          },
        }}
      />
      <Screen
        name="SucessoAmbiente"
        component={SucessoAmbiente}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: tema.cores.primaria,
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontFamily: tema.fontes.texto700,
            fontSize: 25,
            paddingLeft: 95,
          },
        }}
      />
      <Screen
        name="EditarAmbiente"
        component={EditarAmbiente}
        options={{
          title: "Editar Ambiente",
          headerStyle: {
            backgroundColor: tema.cores.primaria,
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontFamily: tema.fontes.texto700,
            fontSize: 25,
            paddingLeft: 40,
          },
        }}
      />
    </Navigator>
  );
}
