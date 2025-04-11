import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


import TelaInicial from "./componentes/TelaInicial/index";
import TelaPlanetas from "./componentes/TelaPlanetas/index";
import TelaGalaxias from '../Meu_projeto/componentes/TelaGalaxias/index';
import TelaBuracoNegro from './componentes/TelaBuracoNegro';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Planetas" component={TelaPlanetas} />
        <Stack.Screen name="Galaxias" component={TelaGalaxias} />
        <Stack.Screen name="Buraco Negro" component={TelaBuracoNegro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


