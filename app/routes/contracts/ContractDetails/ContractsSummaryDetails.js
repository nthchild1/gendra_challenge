import React from 'react';
import {Text, View} from 'react-native';
import SummaryDetails from '../../../../src/components/SummaryDetails/SummaryDetails';
import StyledText from '../../../../src/components/StyledText/StyledText';
import {normalizePx} from '../../../../src/utils/utilFunctions';

function ContractsSummaryDetails({contracts}) {
  const {Paragraph, Header} = StyledText;

  return (
    <SummaryDetails
      Header={() => (
        <Header style={{margin: 5, flex: 1}}>
          <Text style={{color: 'white'}}>Contratos</Text>
        </Header>
      )}>
      {contracts.map(contract => {
        return (
          <View style={{padding: normalizePx(15)}}>
            <Paragraph numberOfLines={2} bold ellipsizeMode={'tail'}>
              {contract.title}
            </Paragraph>
            <Paragraph bold>
              Estatus: <Paragraph bold={false}>{contract.status}</Paragraph>
            </Paragraph>
            <Paragraph bold>
              Fecha de inicio:{' '}
              <Paragraph bold={false}>
                {new Date(contract.period.startDate).toLocaleDateString()}
              </Paragraph>
            </Paragraph>
            <Paragraph bold>
              Fecha de finalizacion:{' '}
              <Paragraph bold={false}>
                {new Date(contract.period.endDate).toLocaleDateString()}
              </Paragraph>
            </Paragraph>
            <Paragraph>
              <Paragraph bold>Cantidad: </Paragraph>$ {contract.value.amount}{' '}
              {contract.value.currency}
            </Paragraph>
          </View>
        );
      })}
    </SummaryDetails>
  );
}

export default ContractsSummaryDetails;
