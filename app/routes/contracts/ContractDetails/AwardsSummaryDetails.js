import React from 'react';
import {Text, View} from 'react-native';

function AwardsSummaryDetails({awards}) {
  return (
    <View>
      <Text>Ganadores</Text>
      {awards.map(award => {
        return (
          <View>
            <Text>Titulo: {award.title}</Text>
            <Text>Nombre:</Text>
            {award.suppliers.map(supplier => {
              return <Text>{supplier.name}</Text>;
            })}
            <Text>
              Cantidad: {award.value.amount} {award.value.currency}
            </Text>
            <Text>Vigencia {award.contractPeriod.endDate}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default AwardsSummaryDetails;
