import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  card: {
    width: 338,
    height: 134,
    borderRadius: 9,
    backgroundColor: tema.cores.secundaria,
    paddingRight: 20,
    paddingLeft: 30,
  },
  ambienteNome: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 3,
  },
  lotacao: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 16,
    paddingTop: 10,
  },
  horarios: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 16,
    paddingTop: 5,
  },
})