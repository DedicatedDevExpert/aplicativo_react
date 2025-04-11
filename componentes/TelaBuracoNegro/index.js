import React from 'react-native'
import { View, Text, Image, Pressable } from 'react-native';
import estilo from '../../componentes/TelaBuracoNegro/estilo';

import imgGalaxias1 from '../../assets/galaxias1.png';
import imgGalaxy from '../../assets/icon-galaxy.png';
import imgHome from '../../assets/icon-home.png';


export default function TelaBuracoNegro(props) {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Buraco Negro</Text>
        <Text style={estilo.descricao}>
          Buraco negro é uma região do espaço-tempo em que o campo gravitacional
          é tão intenso que nada pode escapar dela. A teoria da relatividade
          geral prevê que uma massa suficientemente compacta pode deformar o
          espaço-tempo para formar um buraco negro.
        </Text>
        <Image style={estilo.img} source={imgGalaxias1}></Image>

        <Pressable
          onPress={() => props.navigation.navigate("Galaxias")}
          style={estilo.estilar_botao}
        >
          <Image style={estilo.img_icon} source={imgGalaxy}></Image>
          <Text style={estilo.texto_icon}>Galaxias</Text>
        </Pressable>
        <Pressable
          onPress={() => props.navigation.navigate("TelaInicial")}
          style={estilo.estilar_botao}
        >
          <Image style={estilo.img_icon} source={imgHome}></Image>
          <Text style={estilo.texto_icon}>Tela TelaInicial</Text>
        </Pressable>
      </View>
    );
    }

