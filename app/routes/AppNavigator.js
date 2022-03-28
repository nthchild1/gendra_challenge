import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ContractList} from './contracts/ContractList';
import ContractDetails from './contracts/ContractDetails/ContractDetails';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ContractList">
        <Drawer.Screen name="ContractList" component={ContractList} />
        <Drawer.Screen name="ContractDetails" component={ContractDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
