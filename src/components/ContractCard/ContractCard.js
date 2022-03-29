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
        backgroundColor: '#9D2449',
        borderRadius: 5,
      }}>
      <Paragraph numberOfLines={2} bold style={{color: 'white'}}>
        {item.tender.title}
      </Paragraph>
      <Text style={{color: '#ffc8c8'}}>
        {item.publisher.name.toUpperCase()}
      </Text>
      <Text style={{color: 'white'}}>{item.ocid}</Text>
      <Text style={{color: 'white'}}>
        {new Date(item.date).toLocaleDateString()}
      </Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{color: '#c0c0c0'}}>
          {item.parties.length} participantes
        </Text>
        <Text style={{color: '#c0c0c0'}}>
          {item.contracts.length} contratos
        </Text>
        <Text style={{color: '#c0c0c0'}}>{item.awards.length} ganadores</Text>
      </View>
    </TouchableOpacity>
  );
}
