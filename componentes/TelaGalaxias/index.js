import React from 'react';

import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import estilo from '../TelaGalaxias/estilo';

import imgGalaxias1 from '../../assets/galaxias1.png';
import imgGalaxias2 from '../../assets/galaxias2.png';
import imgPlanetas from '../../assets/icon-planet.png';
import buracoNegro from '../../assets/icon-buraco-negro.png';
import imgHome from '../../assets/icon-home.png';


export default function TelaGalaxia(props) {
    return (
      <ScrollView>
        <View style={estilo.container}>
          <Text style={estilo.titulo}>Galáxias</Text>
          <Text style={estilo.descricao}>
            Na cosmologia, uma galáxia é um grande sistema, gravitacionalmente
            ligado, que consiste de estrelas, remanescentes de estrelas, um meio
            interestelar de gás e poeira, e um, importante mas insuficientemente
            conhecido, componente apelidado de matéria escura.
          </Text>
          <Image source={imgGalaxias1} style={estilo.img}></Image>

          <Text style={estilo.descricao}>
            Na cosmologia, uma galáxia é um grande sistema, gravitacionalmente
            ligado, que consiste de estrelas, remanescentes de estrelas, um meio
            interestelar de gás e poeira, e um, importante mas insuficientemente
            conhecido, componente apelidado de matéria escura.
          </Text>
          <Image source={imgGalaxias2} style={estilo.img}></Image>

          <Pressable
            onPress={() => props.navigation.navigate("Planetas")}
            style={estilo.estilar_botao}
          >
            <Image style={estilo.botao_icon} source={imgPlanetas}></Image>
            <Text style={estilo.texto_icon}>Planetas</Text>
          </Pressable>

          <Pressable
            onPress={() => props.navigation.navigate("Buraco Negro")}
            style={estilo.estilar_botao}
          >
            <Image style={estilo.botao_icon} source={buracoNegro}></Image>
            <Text style={estilo.texto_icon}>Buraco Negro</Text>
          </Pressable>

          <Pressable
            onPress={() => props.navigation.navigate("TelaInicial")}
            style={estilo.estilar_botao}
          >
            <Image style={estilo.botao_icon} source={imgHome}></Image>
            <Text style={estilo.texto_icon}>Inicio</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
    

}