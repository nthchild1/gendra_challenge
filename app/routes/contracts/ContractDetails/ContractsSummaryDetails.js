import React from 'react';
import {Text, View} from 'react-native';

function ContractsSummaryDetails({contracts}) {
  return (
    <View>
      <Text>Contratos</Text>
      {contracts.map(contract => {
        return (
          <View>
            <Text>{contract.title}</Text>
            <Text>Estatus: {contract.status}</Text>
            <Text>Fecha de inicio: {contract.period.startDate}</Text>
            <Text>Fecha de finalizacion: {contract.period.endDate}</Text>
            <Text>
              Cantidad: {contract.value.amount} {contract.value.currency}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default ContractsSummaryDetails;
