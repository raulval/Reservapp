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
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  imgContainer: {
    width: 100,
    height: 100,
    bottom: 110,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'black',
  },
  imgPerfil: {
    width: 100,
    height: 100,
    bottom: 110,
  },
  txtPerfil: {
    fontFamily: tema.fontes.texto600,
    color: tema.cores.textos,
    fontSize: 20,
    bottom: 100,
  }, 
  botao: {
    width: 327,
    height: 54,
    backgroundColor: tema.cores.secundaria,
    borderRadius: 27,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  txtBotao: {
    fontFamily: tema.fontes.texto600,
    fontSize: 18,
    color: tema.cores.textos,
  },
  iconeArrow: {
    paddingLeft: 100,
  },
  botaoSenha: {
    width: 327,
    height: 54,
    backgroundColor: tema.cores.secundaria,
    borderRadius: 27,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconeArrow2: {
    paddingLeft: 170,
  },
  botaoSair: {
    width: 327,
    height: 54,
    backgroundColor: tema.cores.secundaria,
    borderRadius: 27,
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconeArrow3: {
    paddingLeft: 240,
  },
  
})