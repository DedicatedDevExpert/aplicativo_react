import { StyleSheet } from 'react-native';



const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    color: "#cf9556",
    marginBottom: 40,
  },
  descricao: {
    width: 320,
    color: "#b2b2b2",
    marginBottom: 25,
  },
  img: {
    width: 320,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
 
  estilar_botao: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "#cf9556",
    paddingVertical: 5,
    width: 205,
    marginBottom: 10,
  },
  text_btn: {
    backgroundColor: "#cf9556",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  img_icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
export default estilo;