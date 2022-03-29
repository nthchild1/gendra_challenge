import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TendersNavigator from './contracts/TendersNavigator';
import {Image, TouchableOpacity} from 'react-native';

const Drawer = createDrawerNavigator();

export default function AppNavigator({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ContractList">
        <Drawer.Screen
          name="TendersNavigator"
          options={{title: 'Licitaciones'}}
          component={TendersNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
