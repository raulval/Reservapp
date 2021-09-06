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
import firebase from "../../config/firebase";
import { styles } from "./styles";

export function HomeAdmin() {
  const navigation = useNavigation();
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
      .get()
      .then((querySnapshot) => {
        const lista = [];
        querySnapshot.forEach((doc) => {
          lista.push({ ...doc.data(), id: doc.id });
        });
        setReserva(lista);
      });
  }, []);

  function navegarHomeCadastrarA() {
    navigation.navigate("CadastrarAmbiente");
  }

  function navegarPerfil() {
    navigation.navigate("Perfil", {
      nome_usuario: "Administrador",
    });
  }

  function navegarEditarAmbiente(item) {
    navigation.navigate("EditarAmbiente", {
      id: item.id,
      nome_ambiente: item.nome_ambiente,
      descricao: item.descricao,
      lotacao: item.lotacao,
      horario_ini: item.horario_ini,
      horario_fin: item.horario_fin,
    });
  }

  function excluirAmbiente(id) {
    Alert.alert("Excluir Ambiente", "Deseja realmente excluir o Ambiente?", [
      { text: "Cancelar" },
      {
        text: "Sim",
        onPress: () => {
          firebase.firestore().collection("Ambiente").doc(id).delete();
          navigation.push("HomeAdmin");
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Text style={styles.titulo}>Reservas Admin</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={ambiente}
        renderItem={({ item }) => {
          return (
            <SafeAreaView style={styles.cardsAmbiente}>
              <View style={styles.cardAmb}>
                <Text style={styles.ambienteNome}>{item.nome_ambiente}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
                <Text style={styles.lotacao}>
                  <Ionicons
                    name="person"
                    size={20}
                    color="#347AF0"
                    style={styles.icones}
                  />
                  {item.lotacao} pessoas
                </Text>
                <Text style={styles.horarios}>
                  <Ionicons
                    name="time-outline"
                    size={20}
                    color="#347AF0"
                    style={styles.icones}
                  />
                  {item.horario_ini}h - {item.horario_fin}h
                </Text>
                <RectButton
                  style={styles.btnEditar}
                  onPress={() => {
                    navegarEditarAmbiente(item);
                  }}
                >
                  <Text style={styles.txtEditar}>Editar</Text>
                </RectButton>
                <RectButton
                  style={styles.btnExcluir}
                  onPress={() => {
                    excluirAmbiente(item.id);
                  }}
                >
                  <Text style={styles.txtExcluir}>Excluir</Text>
                </RectButton>
              </View>
            </SafeAreaView>
          );
        }}
        contentContainerStyle={{ paddingRight: 20 }}
      />

      <View style={styles.wrapper}>
        <Text style={styles.semititulo}>Todas as reservas</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={reserva}
          renderItem={({ item }) => {
            return (
              <SafeAreaView style={styles.cardsReserva}>
                <View style={styles.cardRes}>
                  <View style={styles.dataContainer}>
                    <Text style={styles.dataDia}>
                      {moment(item.data.toDate()).format("D")}
                    </Text>
                    <Text style={styles.dataMes}>
                      {moment(item.data.toDate()).format("MMM").toUpperCase()}
                    </Text>
                  </View>

                  <View style={styles.outrosContainer}>
                    <Text style={styles.nomeAmbiente}>{item.nome_reserva}</Text>
                    <Text style={styles.pessoas}>{item.pessoas} pessoas</Text>
                    <Text style={styles.horarios}>
                      {item.horarioR_ini}h - {item.horarioR_fin}h
                    </Text>
                    <Text style={styles.txtReservadoPor}>
                      Morador: {item.nome_usuario}
                    </Text>
                  </View>
                </View>
              </SafeAreaView>
            );
          }}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </View>

      <View style={styles.menu}>
        <RectButton style={styles.botaoadd} onPress={navegarHomeCadastrarA}>
          <Feather name="plus" size={40} color="white" />
        </RectButton>

        <RectButton style={styles.botaoPerfil} onPress={navegarPerfil}>
          <Ionicons
            name="person-circle-outline"
            size={50}
            style={styles.iconePerfil}
          />
        </RectButton>

        <Ionicons
          name="notifications"
          size={40}
          style={styles.iconeNotificacao}
        />

        <Text style={styles.txtPerfil}>Perfil</Text>
        <Text style={styles.txtReservar}>Cadastrar Ambiente</Text>
        <Text style={styles.txtNotificacao}>Notificação</Text>
      </View>
    </View>
  );
}
