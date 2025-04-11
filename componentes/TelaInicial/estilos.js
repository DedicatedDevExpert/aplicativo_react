import { StyleSheet } from "react-native";


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagem: {
    width: 300,
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    color: "#cf9556",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: "#b2b2b2",
    marginBottom: 20,
    width: 320,
  },
  botoes_row: {
    flexDirection: "row",
  },
  estilar_botao: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#cf9556",
    margin: 5,
    borderRadius: 20,
  },
  botao_Texto: {
    color: "#252535",
    fontWeight: "bold",
    textAlign: "center",
  },
  box_botoes: {
    flexDirection: "row",
  },
});

export default estilo;