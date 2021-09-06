import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import ImagemSucesso from "../../../assets/illustration_success";
import { BotaoLogin } from "../../../components/BotaoLogin";
import { styles } from "./styles";

export function SucessoAmbiente() {
  const navigation = useNavigation();

  function navegarHomeAdmin() {
    navigation.push("HomeAdmin");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ambiente cadastrado {"\n"}com sucesso!</Text>
      <Text style={styles.subtitulo}>
        Seu ambiente foi cadastrado e {"\n"} já está disponível para os
        moradores
      </Text>

      <View style={styles.imagem}>
        <ImagemSucesso width={307} heigth={127} />
      </View>

      <View style={styles.botao}>
        <BotaoLogin title="Voltar ao início" onPress={navegarHomeAdmin} />
      </View>
    </View>
  );
}
