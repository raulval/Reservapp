import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import firebase from "../../config/firebase";
import { styles } from "./styles";

export function Perfil({ route }) {
  const { nome_usuario } = route.params;
  const navigation = useNavigation();

  function sair() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        alert("Erro ao sair" + error);
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
        <Image
          style={styles.imgPerfil}
          source={require("../../assets/perfil.png")}
        ></Image>

        <Text style={styles.txtPerfil}>{nome_usuario}</Text>

        <RectButton style={styles.botao}>
          <Text style={styles.txtBotao}>Informações pessoais</Text>
          <Feather
            style={styles.iconeArrow}
            name="arrow-right"
            size={24}
            color="#B5BBC9"
          />
        </RectButton>
        <RectButton style={styles.botaoSenha}>
          <Text style={styles.txtBotao}>Trocar Senha</Text>
          <Feather
            style={styles.iconeArrow2}
            name="arrow-right"
            size={24}
            color="#B5BBC9"
          />
        </RectButton>
        <RectButton style={styles.botaoSair} onPress={sair}>
          <Text style={styles.txtBotao}>Sair</Text>
          <Feather
            style={styles.iconeArrow3}
            name="arrow-right"
            size={24}
            color="#B5BBC9"
          />
        </RectButton>
      </View>
    </View>
  );
}
