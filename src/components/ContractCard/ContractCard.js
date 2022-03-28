import {Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import Card from '../Card/Card';

export default function ContractCard({item, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{margin: 20, backgroundColor: 'purple'}}>
      <Text>{item.tender.title}</Text>
      <Text>{item.publisher.name}</Text>
      <Text>{item.ocid}</Text>
      <Text>{item.date}</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text>{item.parties.length} participantes</Text>
        <Text>{item.contracts.length} contratos</Text>
        <Text>{item.awards.length} ganadores</Text>
      </View>
    </TouchableOpacity>
  );
}
