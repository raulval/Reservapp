import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import firebase from "../../config/firebase";
import { styles } from "./styles";

export function EditarAmbiente({ route }) {
  const { id, nome_ambiente, descricao, lotacao, horario_ini, horario_fin } =
    route.params;
  const [pessoas, setPessoas] = useState(lotacao);
  const [horaIni, setHoraini] = useState(horario_ini);
  const [horaFin, setHoraFin] = useState(horario_fin);
  const [nomeAmbiente, setNomeAmbiente] = useState(nome_ambiente);
  const [descricaoAmb, setDescricao] = useState(descricao);

  const navigation = useNavigation();

  function alterarAmbiente() {
    firebase.firestore().collection("Ambiente").doc(id).set({
      horario_ini: horaIni,
      horario_fin: horaFin,
      nome_ambiente: nomeAmbiente,
      descricao: descricaoAmb,
      lotacao: pessoas,
    });
    navigation.push("HomeAdmin");
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.wrapper}>
        <Text style={styles.semititulo}>Editar Ambiente</Text>

        <Text style={styles.txtHorario}>Nome do ambiente</Text>

        <View style={styles.horarioContainer}>
          <View style={styles.nomeAmb}>
            <TextInput
              style={styles.txtInput}
              value={nomeAmbiente}
              onChangeText={(texto) => setNomeAmbiente(texto)}
            ></TextInput>
          </View>
        </View>

        <Text style={styles.txtHorario}>Descrição do ambiente</Text>

        <View style={styles.horarioContainer}>
          <View style={styles.descricaoAmb}>
            <TextInput
              style={styles.txtInput}
              value={descricaoAmb}
              onChangeText={(texto) => setDescricao(texto)}
            ></TextInput>
          </View>
        </View>

        <Text style={styles.txtHorario}>Horário de funcionamento</Text>

        <View style={styles.horarioContainer}>
          <View style={styles.horarioIni}>
            <TextInput
              style={styles.txtHorarioIni}
              value={horaIni}
              onChangeText={(texto) => setHoraini(texto)}
            ></TextInput>
          </View>
          <Text style={styles.txtAte}>Até</Text>
          <View style={styles.horarioFin}>
            <TextInput
              style={styles.txtHorarioIni}
              value={horaFin}
              onChangeText={(texto) => setHoraFin(texto)}
            ></TextInput>
          </View>
        </View>

        <View style={styles.pessoasContainer}>
          <Ionicons name="people" size={24} color="#3783F5" />
          <Text style={styles.txtPessoas}>Número máximo de pessoas</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputPessoas}
              keyboardType="numeric"
              value={String(pessoas)}
              onChangeText={(texto) => setPessoas(texto)}
            />
          </View>
        </View>

        <RectButton style={styles.botao} onPress={alterarAmbiente}>
          <Text style={styles.txtBotao}>Concluir</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
}
