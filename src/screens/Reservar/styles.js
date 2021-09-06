import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tema.cores.primaria,
  },
  titulo: {
    color: 'white',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // left: '8%',
    // right: '2.4%',
    top: 60,
    fontFamily: tema.fontes.texto700,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFFF',
    
  },
  semititulo: {
    color: tema.cores.semititulo,
    fontSize: 18,
    fontFamily: tema.fontes.texto600,
    padding: 10,
    marginLeft: 10,

  },
  calendario: {
    justifyContent: "center",
    alignItems: "center",
    height: 320,
  },
  slider: {
    
  },
  pessoasContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  txtPessoas: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 16,
    paddingLeft: 10,
  },
  inputContainer: {
    width: 93,
    height: 47,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: '#C5CAD4',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 55,
  },
  inputPessoas: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 16,    
  },
  botao: {
    width: 335,
    height: 60,
    backgroundColor: tema.cores.primaria,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginLeft: 29,
  },
  txtBotao: {
    fontFamily: tema.fontes.texto600,
    fontSize: 18,
    color: 'white'
  },

  //======================== SLIDER ==========================

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