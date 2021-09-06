import { StyleSheet } from "react-native";
import { tema } from "../../global/styles/tema";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tema.cores.background,
  },
  titulo: {
    color: tema.cores.textos,
    fontSize: 25,
    textAlign: 'center',
    position: 'absolute',
    left: '4.49%',
    right: '2.4%',
    top: 40,
    fontFamily: tema.fontes.texto700,
  },
  imagem: {
    width: 323,
    height: 227,
    marginBottom: 255
  },
  wrapper: {
    width: '100%',
    height: 500,
    borderRadius: 20,
    backgroundColor: '#FFFF',
    marginBottom: 150
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 100,
    padding: 8,
  },
  txtnconta: {
    fontFamily: tema.fontes.texto400,
    fontSize: 15,
  },
  cadastrese: {
    color: tema.cores.primaria,
    paddingLeft: 5,
    fontFamily: tema.fontes.texto600,
    fontSize: 15,
  },
  erroLogin: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtErroLogin: {
    paddingLeft: 5,
    color: tema.cores.alerta,
    fontSize: 18,
    fontFamily: tema.fontes.texto600,
  },
})