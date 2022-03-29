import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchTenders} from '../../store/tendersSlide/tenders.reducers';
import SearchBar from '../../../src/components/SearchBar/SearchBar';
import Pagination from '../../../src/components/Pagination/Pagination';
import * as React from 'react';
import ContractCard from '../../../src/components/ContractCard/ContractCard';

export function ContractList({navigation}) {
  const dispatch = useDispatch();
  const {
    entities: tenders,
    page,
    pageSize,
  } = useSelector(state => state.tenders);
  const [filteredTenders, setFilteredTenders] = useState(tenders);
  const [searchString, setSearchString] = useState('');

  const filterTenders = () => {
    if (searchString === '') {
      setFilteredTenders(tenders);
    } else {
      setFilteredTenders(() => {
        return tenders.filter(({tender}) =>
          tender.title.toLowerCase().includes(searchString.toLowerCase()),
        );
      });
    }
  };

  useEffect(() => {
    dispatch(fetchTenders({page, pageSize}));
  }, []);

  useEffect(() => {
    setFilteredTenders(tenders);
  }, [tenders]);

  useEffect(() => {
    if (searchString !== '') {
      filterTenders();
    }
  }, [searchString]);

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
      <Pagination displayedPages={5} totalPages={tenders.length / 5} />
    </View>
  );
}
