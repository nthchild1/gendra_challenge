import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchContracts} from '../../store/contractsSlide/contracts.reducers';
import SearchBar from '../../../src/components/SearchBar/SearchBar';
import Pagination from '../../../src/components/Pagination/Pagination';
import * as React from 'react';
import ContractCard from '../../../src/components/ContractCard/ContractCard';

export function ContractList({navigation}) {
  const dispatch = useDispatch();
  const {entities: contracts} = useSelector(state => state.contracts);
  const [page, setPage] = useState(10);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(fetchContracts({page, pageSize}));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'yellow',
      }}>
      <SearchBar />
      <FlatList
        style={{backgroundColor: 'orange', width: '100%'}}
        data={contracts}
        renderItem={({item}) => {
          return (
            <ContractCard
              item={item}
              onPress={() => navigation.navigate('ContractDetails', item)}
            />
          );
        }}
      />
      <Pagination />
    </View>
  );
}
