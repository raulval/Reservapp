import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import firebase from "../../config/firebase";
import { styles } from "./styles";

export function Reservar2({ route }) {
  const { nome_usuario, pessoas, dataSelecionada, horaIni, horaFin } =
    route.params;
  const navigation = useNavigation();
  const [ambiente, setAmbiente] = useState([]);

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

  function adicionarReserva(item) {
    firebase
      .firestore()
      .collection("Reserva")
      .add({
        data: new Date(dataSelecionada),
        horarioR_ini: horaIni,
        horarioR_fin: horaFin,
        nome_reserva: item.nome_ambiente,
        nome_usuario: nome_usuario,
        pessoas: pessoas,
      })
      .catch((error) => {
        alert("Erro ao reservar:" + error);
      });
    navigation.navigate("SucessoReserva", {
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

      <View style={styles.wrapper}>
        <Text style={styles.semititulo}>Selecione um Ambiente</Text>

        <FlatList
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          data={ambiente}
          renderItem={({ item }) => {
            return (
              <SafeAreaView style={styles.cardsAmbiente}>
                <RectButton
                  style={styles.card}
                  onPress={() => {
                    adicionarReserva(item);
                  }}
                >
                  <Text style={styles.ambienteNome}>{item.nome_ambiente}</Text>
                  <Text style={styles.lotacao}>
                    Lotação máxima: {item.lotacao} pessoas
                  </Text>
                  <Text style={styles.horarios}>
                    Aberto das {item.horario_ini}h até as {item.horario_fin}h
                  </Text>
                </RectButton>
              </SafeAreaView>
            );
          }}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </View>
    </View>
  );
}
