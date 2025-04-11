import React from 'react';
import { Text, View, ScrollView, Pressable, Image } from 'react-native';



import estilo from '../TelaPlanetas/estilo';
import imgPlaneta1 from '../../assets/planetas1.png';
import imgHome from "../../assets/icon-home.png";
import imgGalaxy from "../../assets/icon-galaxy.png";
import imgPlanetas from "../../assets/planetas.png";
import imgPlanetas3 from "../../assets/planeta-terra.png";







export default function TelaPlanetas(props) {
    return (
      <ScrollView>
        <View style={estilo.container}>
          <Text style={estilo.titulo}>Planetas</Text>
          <Text>
            Os planetas do Sistema Solar são corpos celestes que orbitam o Sol
            com massa suficiente para que a sua própria gravidade possibilita
            que assumam uma forma arredondada, ou seja, a forma de equilíbrio
            estático.
          </Text>
          <Image style={estilo.img} source={imgPlaneta1} />

          <Text style={estilo.descricao}>
            Os planetas do nosso Sistema Solar formam um conjunto de oito
            planetas que giram em torno do sol. Eles são: Mercúrio, Vênus,
            Terra, Marte, Júpiter, Saturno, Urano e Netuno.
          </Text>
          <Image source={imgPlanetas} style={estilo.img} />

          <Text style={estilo.descricao}>
            A Terra é o terceiro planeta a contar do Sol e o quinto maior do
            Sistema Solar. Até onde se sabe o planeta em que vivemos é o único
            do nosso sistema solar em condições de abrigar vida da forma como a
            conhecemos.
          </Text>
          <Image source={imgPlanetas3} style={estilo.image} />

          <Pressable
            onPress={() => props.navigation.navigate("TelaInicial")}
            style={estilo.estilar_botao}
          >
            <Image style={estilo.botao_icon} source={imgHome}></Image>
            <Text style={estilo.texto_icon}>Início</Text>
          </Pressable>

          <Pressable
            onPress={() => props.navigation.navigate("Galaxias")}
            style={estilo.estilar_botao}
          >
            <Image style={estilo.botao_icon} source={imgGalaxy}></Image>
            <Text style={estilo.texto_icon}>Galaxias</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
    
}


