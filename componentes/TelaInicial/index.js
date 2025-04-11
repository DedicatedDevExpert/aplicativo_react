
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import estilo from '../TelaInicial/estilos'
import universo from '../../assets/fundo-tela-inicial.png';


export default function TelaInicial(props) {
  return (
    <View style={estilo.container}>
      <Image style={estilo.imagem} source={universo}></Image>
      <Text style={estilo.titulo}>Conheça um pouco sobre o universo</Text>
      <Text style={estilo.descricao}>
        Toque nos botões abaixo e veja mais sobre oque existe no céu
      </Text>

      <View style={estilo.box_botoes}>
        <Pressable
          onPress={() => {
            props.navigation.navigate("Planetas");
          }}
          style={estilo.estilar_botao}
        >
          <Text style={estilo.botao_Texto}>Planetas</Text>
        </Pressable>
        
        <Pressable
          onPress={() => {
            props.navigation.navigate("Galaxias");
          }}
          style={estilo.estilar_botao}
        >
          <Text style={estilo.botao_Texto}>Galaxias</Text>
        </Pressable>
        
        <Pressable
          onPress={() => {
            props.navigation.navigate("Buraco Negro");
          }}
          style={estilo.estilar_botao}
        >
          <Text style={estilo.botao_Texto}>Buraco Negro</Text>
        </Pressable>
      </View>
    </View>
  );
  
}