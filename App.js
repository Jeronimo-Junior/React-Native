import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CadastroUsuario from './screens/CadastroUsuario';
import Listar from './screens/Listar';
import Inserir from './screens/Inserir';
import Alterar from './screens/Alterar';





const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ListarScreen" component={Listar} options={{headerShown:false}} />
        <Stack.Screen name="AlterarScreen" component={Alterar} options={{headerShown:false}}/>
        <Stack.Screen name="InserirScreen" component={Inserir} options={{headerShown:false}} />
        <Stack.Screen name="CadastroUsuarioScreen" component={CadastroUsuario} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;