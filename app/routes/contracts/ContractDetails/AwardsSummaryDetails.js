import React from 'react';
import {Text, View} from 'react-native';
import SummaryDetails from '../../../../src/components/SummaryDetails/SummaryDetails';
import StyledText from '../../../../src/components/StyledText/StyledText';
import {normalizePx} from '../../../../src/utils/utilFunctions';

function AwardsSummaryDetails({awards}) {
  const {Header, Paragraph} = StyledText;

  return (
    <SummaryDetails
      Header={() => (
        <Header style={{margin: 5, flex: 1}}>
          <Text style={{color: 'white'}}>Ganadores</Text>
        </Header>
      )}>
      <View style={{padding: normalizePx(15)}}>
        {awards.map(award => {
          return (
            <View key={award.title}>
              <Paragraph bold>
                Titulo: <Paragraph bold={false}>{award.title}</Paragraph>
              </Paragraph>
              <Paragraph bold>Nombre(s):</Paragraph>
              {award.suppliers.map(supplier => {
                return (
                  <Paragraph key={supplier.name} bold={false}>
                    {supplier.name}
                  </Paragraph>
                );
              })}
              <Paragraph bold>
                Cantidad:{' '}
                {
                  <Paragraph bold={false}>
                    ${award.value.amount} {award.value.currency}
                  </Paragraph>
                }
              </Paragraph>
              <Paragraph bold>
                Vigencia:{' '}
                <Paragraph bold={false}>
                  {new Date(award.contractPeriod.endDate).toLocaleDateString()}
                </Paragraph>
              </Paragraph>
            </View>
          );
        })}
      </View>
    </SummaryDetails>
  );
}

export default AwardsSummaryDetails;
