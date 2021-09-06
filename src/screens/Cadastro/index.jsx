import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import ImagemCadastro from "../../assets/illustration_office.svg";
import { BotaoLogin } from "../../components/BotaoLogin";
import { TextoInput } from "../../components/TextoInput";
import firebase from "../../config/firebase";
import { styles } from "./styles";

export function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroCadastro, setErroCadastro] = useState("");

  function cadastrarUsuario() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        navegarSucessoCad(user);
      })
      .catch((error) => {
        setErroCadastro(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });

    function navegarSucessoCad(user) {
      firebase.firestore().collection("Morador").doc(user.uid).set({
        apartamento: apartamento,
        email: email,
        senha: senha,
        nome_morador: nome,
      });
      navigation.navigate("SucessoCad");
    }
  }

  function nevegarCadLogin() {
    navigation.navigate("Login");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      /> */}

        {/* <Text style={styles.titulo}>
        Criar Conta
      </Text> */}

        <View style={styles.imagem}>
          <ImagemCadastro width={307} heigth={127} />
        </View>

        <View style={styles.wrapper}>
          <TextoInput
            placeholder="Nome Completo"
            onChangeText={(texto) => setNome(texto)}
            value={nome}
          />
          <TextoInput
            placeholder="Apartamento"
            onChangeText={(texto) => setApartamento(texto)}
            value={apartamento}
          />
          <TextoInput
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />
          <TextoInput
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(texto) => setSenha(texto)}
            value={senha}
          />
          {erroCadastro === true ? (
            <View style={styles.erroCadastro}>
              <Feather name="alert-circle" size={24} color="#F94343" />
              <Text style={styles.txtErroCadastro}>Email inválido</Text>
            </View>
          ) : (
            <View />
          )}
          {nome === "" || apartamento === "" || email === "" || senha === "" ? (
            <View style={styles.erroCadastro}>
              <Feather name="alert-circle" size={24} color="#F94343" />
              <Text style={styles.txtErroCadastro}>
                Preencha todos os campos
              </Text>
            </View>
          ) : (
            <View />
          )}

          <View style={styles.botaoCad}>
            <BotaoLogin title="Cadastrar" onPress={cadastrarUsuario} />
          </View>

          <View style={styles.containerBtn}>
            <Text style={styles.txtnconta}>Já tem uma conta?</Text>
            <RectButton activeOpacity={0.7} onPress={nevegarCadLogin}>
              <Text style={styles.cadastrese}>Faça o Login</Text>
            </RectButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
