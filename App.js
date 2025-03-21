import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import Access from './src/screens/Access';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Access">
        <Stack.Screen name="Access" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
