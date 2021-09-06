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
    position: 'absolute',
    left: '8%',
    right: '2.4%',
    top: 60,
    fontSize: 25,
    fontFamily: tema.fontes.texto700,
  },
  wrapper: {
    width: '100%',
    height: 330,
    bottom: 562,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFFF',
    marginBottom: -500
  },
  semititulo: {
    color: tema.cores.semititulo,
    fontSize: 18,
    fontFamily: tema.fontes.texto600,
    padding: 10,
    marginLeft: 10,

  },
  menu: {
    flex: 1,
    position: 'absolute',
    height: 79,
    top: '90%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    backgroundColor: tema.cores.menu,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
  },
  botaoadd: {
    width: 65,
    height: 65,
    backgroundColor: tema.cores.primaria,
    borderRadius: 40,
    bottom: 20,
    left: 159,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoPerfil: {
    width: 50,
    height: 50,
    bottom: 65,
    left: 44,
  },
  iconePerfil: {
    color: tema.cores.textos,
  },
  iconeNotificacao: {
    color: tema.cores.textos,
    bottom: 112,
    left: 298,
  },
  txtPerfil: {
    color: tema.cores.textos,
    bottom: 110,
    left: 52,
    fontFamily: tema.fontes.texto400,
    fontSize: 14,
  },
  txtReservar: {
    color: tema.cores.textos,
    bottom: 131,
    left: 129,
    fontFamily: tema.fontes.texto400,
    fontSize: 14,
  },
  txtNotificacao: {
    color: tema.cores.textos,
    bottom: 151,
    left: 285,
    fontFamily: tema.fontes.texto400,
    fontSize: 14,
  },
  flatlist: {
    marginBottom: 25,
    
  },
  cardsAmbiente: {
    // position: 'absolute',
    left: '0%',
    right: '0%',
    top: '13%',
    bottom: '6.5%',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  cardsReserva: {
    // borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ======================= Card Ambiente ======================

  cardAmb: {
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
  btnEditar: {
    width: 55,
    height: 24,
    left: 180,
    bottom: 40,
  },
  txtEditar: {
    fontFamily: tema.fontes.texto400,
    fontSize: 18,
    color: tema.cores.primaria,

  },
  btnExcluir: {
    width: 55,
    height: 24,
    left: 180,
    bottom: 30,
  },
  txtExcluir: {
    fontFamily: tema.fontes.texto400,
    fontSize: 18,
    color: tema.cores.alerta,
  },

  //======================== Card Reserva ======================

  cardRes: {
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
    paddingBottom: 2
  }
  
})