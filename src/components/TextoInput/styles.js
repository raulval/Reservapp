import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 31,
  },
  input: {
    width: '90%',
    padding: 5,
    borderColor: tema.cores.primaria,
    borderBottomWidth: 1.5,
    fontSize: 18,
    fontFamily: tema.fontes.texto400,
  }
})