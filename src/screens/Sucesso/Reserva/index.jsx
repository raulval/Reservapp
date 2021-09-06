import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import ImagemSucesso from "../../../assets/illustration_success";
import { BotaoLogin } from "../../../components/BotaoLogin";
import { styles } from "./styles";

export function SucessoReserva({ route }) {
  const { nome_usuario } = route.params;
  const navigation = useNavigation();

  function navegarHome() {
    navigation.push("Home", {
      nome_usuario: nome_usuario,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Reserva feita com {"\n"}sucesso!</Text>
      <Text style={styles.subtitulo}>
        Agora é só esperar o horário da{"\n"} reserva e esperar!
      </Text>

      <View style={styles.imagem}>
        <ImagemSucesso width={307} heigth={127} />
      </View>

      <View style={styles.botao}>
        <BotaoLogin title="Voltar ao início" onPress={navegarHome} />
      </View>
    </View>
  );
}
