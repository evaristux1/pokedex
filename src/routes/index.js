// ? Index das rotas do app

import Home from '../pages/home';
import Details from '../pages/details';

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="PokeDex">
          <Stack.Screen name="PokeDex" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
