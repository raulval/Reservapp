import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const props = {
  dia: "",
  mes: "",
  pessoas: "",
  horarioRIni: "",
  horarioRFin: "",
  nomeAmbiente: "",
  pegarNome: "",
};

export function CardReservaAdmin({
  dia,
  mes,
  pessoas,
  horarioRIni,
  horarioRFin,
  nomeAmbiente,
  pegarNome,
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
        <Text style={styles.txtReservadoPor}>Morador: {pegarNome}</Text>
      </View>
    </View>
  );
}
