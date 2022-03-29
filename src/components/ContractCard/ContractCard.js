import {Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import StyledText from '../StyledText/StyledText';

export default function ContractCard({item, onPress}) {
  const {Paragraph} = StyledText;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 20,
        padding: 10,
        backgroundColor: 'silver',
        borderRadius: 5,
      }}>
      <Paragraph bold>{item.tender.title}</Paragraph>
      <Text>{item.publisher.name}</Text>
      <Text>{item.ocid}</Text>
      <Text>{new Date(item.date).toLocaleDateString()}</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text>{item.parties.length} participantes</Text>
        <Text>{item.contracts.length} contratos</Text>
        <Text>{item.awards.length} ganadores</Text>
      </View>
    </TouchableOpacity>
  );
}
