import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContractList} from './ContractList';
import ContractDetails from './ContractDetails/ContractDetails';
import * as React from 'react';

const Stack = createNativeStackNavigator();

export default function TendersNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Lista de Licitaciones',
          headerStyle: {backgroundColor: '#285C4D'},
          headerTitleStyle: {
            color: 'white',
          },
        }}
        name="ContractList"
        component={ContractList}
      />
      <Stack.Screen
        name="ContractDetails"
        options={{
          title: 'Detalle de Licitacion',
          headerStyle: {backgroundColor: '#285C4D'},
          headerTitleStyle: {
            color: 'white',
          },
        }}
        component={ContractDetails}
      />
    </Stack.Navigator>
  );
}
