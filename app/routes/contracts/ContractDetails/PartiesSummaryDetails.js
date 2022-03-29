import React from 'react';
import {Text, View} from 'react-native';
import SummaryDetails from '../../../../src/components/SummaryDetails/SummaryDetails';
import StyledText from '../../../../src/components/StyledText/StyledText';
import {normalizePx} from '../../../../src/utils/utilFunctions';

function PartiesSummaryDetails({parties}) {
  const {Paragraph, Header} = StyledText;

  return (
    <SummaryDetails
      Header={() => (
        <Header style={{margin: 5, flex: 1}}>
          <Text style={{color: 'white'}}>Partes</Text>
        </Header>
      )}>
      <View style={{padding: normalizePx(15)}}>
        {parties.map(party => {
          return (
            <View
              key={party.name}
              style={{
                borderWidth: normalizePx(3),
                margin: normalizePx(5),
                padding: normalizePx(10),
                borderColor: 'black',
                backgroundColor: '#E8E8E8',
                borderRadius: normalizePx(10),
              }}>
              <Paragraph bold>{party.name}</Paragraph>
              <Paragraph>
                <Paragraph bold>roles:</Paragraph> {party.roles.join(', ')}
              </Paragraph>
              <Paragraph>
                <Paragraph bold>Direccion: </Paragraph>
                {Object.values(party?.address ?? {}).join(' ')}
              </Paragraph>
              <View>
                {Object.keys(party?.contactPoint ?? {}).map(contact => {
                  return (
                    <Paragraph key={party?.contactPoint[contact]}>
                      <Paragraph bold>{contact}: </Paragraph>
                      {party?.contactPoint[contact]}
                    </Paragraph>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </SummaryDetails>
  );
}

export default PartiesSummaryDetails;
