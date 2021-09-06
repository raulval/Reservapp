import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import "moment/locale/pt-br";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { CardAmbiente } from "../../components/CardAmbiente";
import { CardReserva } from "../../components/CardReserva";
import firebase from "../../config/firebase";
import { styles } from "./styles";

export function Home({ route }) {
  const navigation = useNavigation();
  const { nome_usuario } = route.params;
  const [ambiente, setAmbiente] = useState([]);
  const [reserva, setReserva] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Ambiente")
      .onSnapshot((query) => {
        const lista = [];
        query.forEach((doc) => {
          lista.push({ ...doc.data(), id: doc.id });
        });
        setAmbiente(lista);
      });
  }, []);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Reserva")
      .where("nome_usuario", "==", nome_usuario)
      .get()
      .then((querySnapshot) => {
        const lista = [];
        querySnapshot.forEach((doc) => {
          lista.push({ ...doc.data(), id: doc.id });
        });
        setReserva(lista);
      });
  }, []);

  function excluirReserva(id) {
    Alert.alert("Excluir Reserva", "Deseja realmente excluir a sua reserva?", [
      { text: "Cancelar" },
      {
        text: "Sim",
        onPress: () => {
          firebase.firestore().collection("Reserva").doc(id).delete();
          navigation.push("Home", {
            nome_usuario: nome_usuario,
          });
        },
      },
    ]);
  }

  function navegarHomeReservar() {
    navigation.navigate("Reservar", {
      nome_usuario: nome_usuario,
    });
  }

  function navegarPerfil() {
    navigation.navigate("Perfil", {
      nome_usuario: nome_usuario,
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Text style={styles.titulo}>Reservas</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={ambiente}
        renderItem={({ item }) => {
          return (
            <SafeAreaView style={styles.cardsAmbiente}>
              <CardAmbiente
                nomeAmbiente={item.nome_ambiente}
                descricao={item.descricao}
                lotacao={item.lotacao}
                horarioIni={item.horario_ini}
                horarioFin={item.horario_fin}
              />
            </SafeAreaView>
          );
        }}
        contentContainerStyle={{ paddingRight: 20 }}
      />

      <View style={styles.wrapper}>
        <Text style={styles.semititulo}>Minhas reservas</Text>

        <FlatList
          // style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          data={reserva}
          renderItem={({ item }) => {
            return (
              <SafeAreaView style={styles.cardsReserva}>
                <CardReserva
                  nomeAmbiente={item.nome_reserva}
                  dia={moment(item.data.toDate()).format("D")}
                  mes={moment(item.data.toDate()).format("MMM").toUpperCase()}
                  horarioRIni={item.horarioR_ini}
                  horarioRFin={item.horarioR_fin}
                  pessoas={item.pessoas}
                  onPress={() => {
                    excluirReserva(item.id);
                  }}
                />
              </SafeAreaView>
            );
          }}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </View>

      <View style={styles.menu}>
        <RectButton style={styles.botaoadd} onPress={navegarHomeReservar}>
          <Feather name="plus" size={40} color="white" />
        </RectButton>

        <RectButton style={styles.botaoPerfil} onPress={navegarPerfil}>
          <Ionicons
            name="person-circle-outline"
            size={50}
            style={styles.iconePerfil}
          />
        </RectButton>

        <RectButton style={styles.botaoNotificacao}>
          <Ionicons
            name="notifications"
            size={40}
            style={styles.iconeNotificacao}
          />
        </RectButton>

        <Text style={styles.txtPerfil}>Perfil</Text>
        <Text style={styles.txtReservar}>Reservar</Text>
        <Text style={styles.txtNotificacao}>Notificação</Text>
      </View>
    </View>
  );
}
