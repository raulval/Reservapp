import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { tema } from "../../global/styles/tema";
import { styles } from "./styles";

const props = {
  dia: "",
  mes: "",
  pessoas: "",
  horarioRIni: "",
  horarioRFin: "",
  nomeAmbiente: "",
  onPress: "",
};

export function CardReserva({
  dia,
  mes,
  pessoas,
  horarioRIni,
  horarioRFin,
  nomeAmbiente,
  onPress,
} = props) {
  return (
    <View style={styles.card}>
      <View style={styles.dataContainer}>
        <Text style={styles.dataDia}>{dia}</Text>
        <Text style={styles.dataMes}>{mes}</Text>
      </View>

      <View style={styles.outrosContainer}>
        <Text style={styles.nomeAmbiente}>{nomeAmbiente}</Text>
        <Text style={styles.pessoas}>{pessoas} pessoas</Text>
        <Text style={styles.horarios}>
          {horarioRIni}h - {horarioRFin}h
        </Text>
      </View>

      <View style={styles.excluirContainer}>
        <RectButton onPress={onPress}>
          <Ionicons name="trash" size={30} color={tema.cores.alerta} />
        </RectButton>
      </View>
    </View>
  );
}
