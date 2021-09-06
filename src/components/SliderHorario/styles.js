import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  container: {
    
  },
  txtHorario: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 40,
  },
  horarioContainer: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  horarioIni: {
    width: 109,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C5CAD4',
    justifyContent: "center",
    alignItems: "center",
  },
  txtHorarioIni: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 16,
  },
  horarioFin: {
    width: 109,
    height: 45,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#C5CAD4',
    justifyContent: "center",
    alignItems: "center",
  },
  txtHorarioFin: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 16,
  },
  txtAte: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 16,
    paddingLeft: 37,
    paddingRight: 37,
  },
  slider2: {
    position: "absolute",
    width: 400,
    top: 75,
    height: 60,
  }
})