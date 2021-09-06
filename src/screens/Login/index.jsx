// import { StatusBar } from 'expo-status-bar';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Keyboard,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import ImagemLogin from "../../assets/illustration_login.svg";
import { BotaoLogin } from "../../components/BotaoLogin";
import { TextoInput } from "../../components/TextoInput";
import firebase from "../../config/firebase";
import { styles } from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const [nomeMorador, setNomeMorador] = useState("");
  const navigation = useNavigation();

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        if (user.email == "admin@email.com") {
          navigation.navigate("HomeAdmin");
        } else {
          firebase
            .firestore()
            .collection("Morador")
            .doc(user.uid)
            .get()
            .then((doc) => {
              const morador = doc.data().nome_morador;

              navigation.navigate("Home", {
                nome_usuario: morador,
              });
            });
          // pegarNome(user.uid);
        }
      })
      .catch((error) => {
        setErroLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  function nevegarLoginCad() {
    navigation.navigate("Cadastro");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <Text style={styles.titulo}>Bem Vindo!</Text>

        <View style={styles.imagem}>
          <ImagemLogin width={323} heigth={227} />
        </View>

        <View style={styles.wrapper}>
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
          {erroLogin === true ? (
            <View style={styles.erroLogin}>
              <Feather name="alert-circle" size={24} color="#F94343" />
              <Text style={styles.txtErroLogin}>Email ou senha inválidos</Text>
            </View>
          ) : (
            <View />
          )}

          <BotaoLogin title="Login" onPress={loginFirebase} />

          <View style={styles.containerBtn}>
            <Text style={styles.txtnconta}>Não tem uma conta?</Text>
            <RectButton onPress={nevegarLoginCad}>
              <Text style={styles.cadastrese}>Cadastre-se</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
