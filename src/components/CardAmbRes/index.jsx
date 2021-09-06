import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

const props = {
  lotacao: "",
  horarioRIni: "",
  horarioRFin: "",
  nomeAmbiente: "",
  onPress: "",
};

export function CardAmbRes({
  lotacao,
  horarioIni,
  horarioFin,
  nomeAmbiente,
  onPress,
} = props) {
  return (
    <RectButton style={styles.card} onPress={onPress}>
      <Text style={styles.ambienteNome}>{nomeAmbiente}</Text>
      <Text style={styles.lotacao}>Lotação máxima: {lotacao} pessoas</Text>
      <Text style={styles.horarios}>
        Aberto das {horarioIni}h até as {horarioFin}h
      </Text>
    </RectButton>
  );
}
