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
  flatlist: {
    marginBottom: 25, 
  },  
  botao: {
    width: 335,
    height: 60,
    backgroundColor: tema.cores.primaria,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 29,
  },
  txtBotao: {
    fontFamily: tema.fontes.texto600,
    fontSize: 18,
    color: 'white'
  },
  cardsAmbiente: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  //========================= CARD =======================

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