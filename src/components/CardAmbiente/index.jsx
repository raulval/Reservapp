import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Text, View
} from 'react-native';
import { styles } from "./styles";

const props = {
  nomeAmbiente: "",
  lotacao: "",
  horarioIni: "",
  horarioFin: "",
  descricao: "",
}

export function CardAmbiente({nomeAmbiente, lotacao, horarioIni, horarioFin, descricao} = props){
  return(
    <View
    style={styles.card} 
    >
{/* 
      <View style={styles.ambienteImagem}>

      </View> */}

      <Text style={styles.ambienteNome}>
        { nomeAmbiente }
      </Text >
      <Text style={styles.descricao}>
        { descricao }
      </Text>
      <Text style={styles.lotacao}>
        <Ionicons name="person" size={20} color="#347AF0" style={styles.icones}/>
        { lotacao } pessoas
      </Text>
      <Text style={styles.horarios}>
        <Ionicons name="time-outline" size={20} color="#347AF0" style={styles.icones} />
        { horarioIni }h - { horarioFin }h
      </Text>

    </View>
  );
}