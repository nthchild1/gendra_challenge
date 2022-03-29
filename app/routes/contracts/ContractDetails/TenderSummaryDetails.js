import React from 'react';
import {View} from 'react-native';
import StyledText from '../../../../src/components/StyledText/StyledText';
import {normalizePx} from '../../../../src/utils/utilFunctions';

function TenderSummaryDetails({tender}) {
  const {Paragraph, Title} = StyledText;

  return (
    <View style={{padding: normalizePx(30)}}>
      <Title bold>{tender.title}</Title>
      <Paragraph>{tender.procuringEntity.name}</Paragraph>
      <Paragraph>Estatus: {tender.status}</Paragraph>
      <View>
        {'numberOfTenderers' in tender ?? (
          <Paragraph>Numero de licitantes {tender.numberOfTenderers}</Paragraph>
        )}
      </View>
    </View>
  );
}

export default TenderSummaryDetails;
