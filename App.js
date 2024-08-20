// App.js
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Home from './components/Home';
import Monitoramento from './components/Monitoramento';
import Contatos from './components/Contatos';
import Lembrete from './components/Lembrete';
import AdicionarLembrete from './components/AdicionarLembrete';
import AdicionarMemoria from './components/AdicionarMemoria';
import Localizacao from './components/Localizacao';
import Perfil from './components/Perfil';

//import { createTables } from './database';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    //createTables();  // Cria as tabelas ao iniciar o app
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Monitoramento" component={Monitoramento} />
        <Stack.Screen name="Contatos" component={Contatos} />
        <Stack.Screen name="Lembrete" component={Lembrete} />
        <Stack.Screen name="AdicionarLembrte" component={AdicionarLembrete} />
        <Stack.Screen name="AdicionarMemoria" component={AdicionarMemoria} />
        <Stack.Screen name="Localizacao" component={Localizacao} />
        <Stack.Screen name="Perfil" component={Perfil} />
        {/* Adicione outras telas aqui conforme for criando */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
