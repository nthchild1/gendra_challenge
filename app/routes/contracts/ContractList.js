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

  const [filteredTenders, setFilteredTenders] = useState(contracts);
  const [searchString, setSearchString] = useState('');

  const filterTenders = () => {
    if (searchString === '') {
      setFilteredTenders(contracts);
    } else {
      setFilteredTenders(() => {
        return contracts.filter(({tender}) =>
          tender.title.toLowerCase().includes(searchString.toLowerCase()),
        );
      });
    }
  };

  useEffect(() => {
    dispatch(fetchContracts({page, pageSize}));
  }, []);

  useEffect(() => {
    setFilteredTenders(contracts);
  }, [contracts]);

  useEffect(() => {
    filterTenders();
  }, [searchString]);

  console.log(filteredTenders);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <SearchBar
        onSubmit={() => filterTenders()}
        onChangeText={text => setSearchString(text)}
      />
      <FlatList
        style={{width: '100%'}}
        data={filteredTenders}
        renderItem={({item}) => {
          return (
            <ContractCard
              item={item}
              onPress={() => navigation.navigate('ContractDetails', item)}
            />
          );
        }}
      />
      <Pagination displayedPages={5} totalPages={contracts.length / 5} />
    </View>
  );
}
