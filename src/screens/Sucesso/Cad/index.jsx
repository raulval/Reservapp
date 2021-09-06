import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import ImagemSucesso from "../../../assets/illustration_success";
import { BotaoLogin } from "../../../components/BotaoLogin";
import { styles } from "./styles";

export function SucessoCad() {
  const navigation = useNavigation();

  function navegarCadLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro feito com {"\n"}sucesso!</Text>
      <Text style={styles.subtitulo}>
        Agora é só fazer login com seu{"\n"} email e senha cadastrados!
      </Text>

      <View style={styles.imagem}>
        <ImagemSucesso width={307} heigth={127} />
      </View>

      <View style={styles.botao}>
        <BotaoLogin title="Voltar ao início" onPress={navegarCadLogin} />
      </View>
    </View>
  );
}
