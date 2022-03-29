import React from 'react';
import {Text, View} from 'react-native';
import SummaryDetails from '../../../../src/components/SummaryDetails/SummaryDetails';
import StyledText from '../../../../src/components/StyledText/StyledText';
import {normalizePx} from '../../../../src/utils/utilFunctions';

function TenderSummaryDetails({tender}) {
  const {Header, Paragraph} = StyledText;

  return (
    <SummaryDetails
      Header={() => (
        <Header style={{width: '100%', marginVertical: 5}}>
          <Text style={{color: 'white'}}>Licitacion</Text>
        </Header>
      )}>
      <View style={{padding: normalizePx(15)}}>
        <Paragraph bold>{tender.title}</Paragraph>
        <Paragraph>{tender.procuringEntity.name}</Paragraph>
        <Paragraph>Estatus: {tender.status}</Paragraph>
        <View>
          {'numberOfTenderers' in tender ?? (
            <Paragraph>
              Numero de licitantes {tender.numberOfTenderers}
            </Paragraph>
          )}
        </View>
      </View>
    </SummaryDetails>
  );
}

export default TenderSummaryDetails;
