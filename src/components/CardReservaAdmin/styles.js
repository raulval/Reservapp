import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  card: {
    width: 327,
    height: 84,
    borderRadius: 42,
    backgroundColor: tema.cores.secundaria,
    flexDirection: 'row',
  },
  dataContainer: {
    paddingLeft: 25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 2,
  },
  outrosContainer: {
    paddingLeft: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  dataDia: {
    fontFamily: tema.fontes.texto700,
    color: tema.cores.textos,
    fontSize: 36,
  },
  dataMes: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 18,
    bottom: 10,
    left: 2,
  },
  pessoas: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 16,
  },
  horarios: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 16,
    // paddingTop: 5,
  },
  nomeAmbiente: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 18,
  },
  txtReservadoPor: {
    fontFamily: tema.fontes.texto400,
    color: tema.cores.textos,
    fontSize: 14,
  }
  
})