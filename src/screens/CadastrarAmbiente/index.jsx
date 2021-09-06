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

export function CadastrarAmbiente() {
  const [pessoas, setPessoas] = useState(null);
  const [horaIni, setHoraini] = useState(null);
  const [horaFin, setHoraFin] = useState(null);
  const [nomeAmbiente, setNomeAmbiente] = useState(null);
  const [descricao, setDescricao] = useState(null);

  const navigation = useNavigation();

  function adicionarAmbiente() {
    firebase.firestore().collection("Ambiente").add({
      horario_ini: horaIni,
      horario_fin: horaFin,
      nome_ambiente: nomeAmbiente,
      descricao: descricao,
      lotacao: pessoas,
    });
    navigation.navigate("SucessoAmbiente");
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.wrapper}>
        <Text style={styles.semititulo}>Cadastre um Ambiente</Text>

        <Text style={styles.txtHorario}>Nome do ambiente</Text>

        <View style={styles.horarioContainer}>
          <View style={styles.nomeAmb}>
            <TextInput
              style={styles.txtInput}
              placeholder="Nome"
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
              placeholder="Descrição"
              value={descricao}
              onChangeText={(texto) => setDescricao(texto)}
            ></TextInput>
          </View>
        </View>

        <Text style={styles.txtHorario}>Horário de funcionamento</Text>

        <View style={styles.horarioContainer}>
          <View style={styles.horarioIni}>
            <TextInput
              style={styles.txtHorarioIni}
              placeholder="19:00"
              value={horaIni}
              onChangeText={(texto) => setHoraini(texto)}
            ></TextInput>
          </View>
          <Text style={styles.txtAte}>Até</Text>
          <View style={styles.horarioFin}>
            <TextInput
              style={styles.txtHorarioIni}
              placeholder="22:00"
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
              placeholder="12"
              keyboardType="numeric"
              value={pessoas}
              onChangeText={(texto) => setPessoas(texto)}
            />
          </View>
        </View>

        <RectButton style={styles.botao} onPress={adicionarAmbiente}>
          <Text style={styles.txtBotao}>Cadastrar</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
}
