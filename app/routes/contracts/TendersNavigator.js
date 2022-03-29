import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContractList} from './ContractList';
import ContractDetails from './ContractDetails/ContractDetails';
import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default function TendersNavigator({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{width: 20, height: 20}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png',
              }}
            />
          </TouchableOpacity>
        ),
      }}>
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
