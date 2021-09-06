import { StyleSheet } from "react-native";
import { tema } from "../../../global/styles/tema";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tema.cores.background,
  },
  titulo: {
    color: tema.cores.heading,
    fontSize: 25,
    textAlign: 'center',
    position: 'absolute',
    left: '4.49%',
    right: '2.4%',
    top: 50,
    fontFamily: tema.fontes.texto700,
  },
  imagem: {
    width: 307,
    height: 127,
    position: 'absolute',
    top: 150
  },
  subtitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 150,
    fontSize: 16,
    fontFamily: tema.fontes.texto400,
  },
  botao: {
    position: 'absolute',
    top: 580,
    right: 70,
  },
})