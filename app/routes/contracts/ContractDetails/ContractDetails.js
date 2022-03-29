import React, {useRef} from 'react';
import {ScrollView} from 'react-native';
import TenderSummaryDetails from './TenderSummaryDetails';
import AwardsSummaryDetails from './AwardsSummaryDetails';
import ContractsSummaryDetails from './ContractsSummaryDetails';
import PartiesSummaryDetails from './PartiesSummaryDetails';

const ContractDetails = ({route: {params}}) => {
  const {awards, contracts, tender, parties} = params;

  return (
    <ScrollView>
      <TenderSummaryDetails tender={tender} />
      <AwardsSummaryDetails awards={awards} />
      <ContractsSummaryDetails contracts={contracts} />
      <PartiesSummaryDetails parties={parties} />
    </ScrollView>
  );
};

export default ContractDetails;
