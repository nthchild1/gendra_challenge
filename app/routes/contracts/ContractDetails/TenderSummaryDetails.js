import React from 'react';
import {Text, View} from 'react-native';

function TenderSummaryDetails({tender}) {
  return (
    <View>
      <Text>Licitacion</Text>
      <Text>{tender.title}</Text>
      <Text>{tender.procuringEntity.name}</Text>
      <Text>Estatus: {tender.status}</Text>
      <View>
        {'numberOfTenderers' in tender ?? (
          <Text>Numero de licitantes {tender.numberOfTenderers}</Text>
        )}
      </View>
    </View>
  );
}

export default TenderSummaryDetails;
