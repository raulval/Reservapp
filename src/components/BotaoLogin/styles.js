import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  botao: {
    backgroundColor: tema.cores.primaria,
    width: 250,
    height: 50,
    borderRadius: 23,
    justifyContent: 'center',
    marginTop: 70,
    marginLeft: 75,
  },
  texto: {
    color: '#FFFF',
    textAlign: 'center',
    fontSize: 19,
    fontFamily: tema.fontes.texto600,
  },
})