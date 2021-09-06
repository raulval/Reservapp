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
  botaoNotificacao: {
    width: 40,
    height: 40,
    bottom: 112,
    left: 298,
  },
  iconeNotificacao: {
    color: tema.cores.textos,
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
    left: 164,
    fontFamily: tema.fontes.texto400,
    fontSize: 14,
  },
  txtNotificacao: {
    color: tema.cores.textos,
    bottom: 150,
    left: 285,
    fontFamily: tema.fontes.texto400,
    fontSize: 14,
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 20,
  },
  
})