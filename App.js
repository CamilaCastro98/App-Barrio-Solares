import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import Access from './src/screens/Access';
import SponsorDetail from './src/screens/SponsorDetail';
import IdCard from './src/screens/IDCard';
import SponsorMenu from './src/screens/SponsorMenu';
import QRScanner from './src/components/QRScanner';
import InputScreen from './src/components/InputScreen';
import ConsumptionList from './src/screens/ConsumptionList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConsumptionList">
        <Stack.Screen name="ConsumptionList" component={ConsumptionList} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
