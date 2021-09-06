import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  card: {
    width: 271,
    height: 245,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingRight: 20,
    paddingLeft: 20,
  },
  ambienteNome: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 3,
  },
  descricao: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 15,
    lineHeight: 17,
  },
  lotacao: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 14,
    paddingTop: 10,
  },
  icones: {
    paddingRight: 5,
  },
  horarios: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 14,
    paddingTop: 5,
  },
  
})