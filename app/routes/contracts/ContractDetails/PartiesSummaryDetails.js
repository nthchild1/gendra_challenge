import React from 'react';
import {Text, View} from 'react-native';

function PartiesSummaryDetails({parties}) {
  return (
    <View>
      <Text>Parties</Text>
      {parties.map(party => {
        return (
          <View>
            <Text>{party.name}</Text>
            <Text>roles: {party.roles.join(', ')}</Text>
            <Text>
              Direccion: {Object.values(party?.address ?? {}).join(' ')}
            </Text>
            <Text>
              Contacto:{' '}
              {Object.keys(party?.contactPoint ?? {}).map(contact => {
                return (
                  <Text>
                    {contact}: {party?.contactPoint[contact]}
                  </Text>
                );
              })}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export default PartiesSummaryDetails;
