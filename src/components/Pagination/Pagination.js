import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  advanceToNextPage,
  fetchContracts,
} from '../../../app/store/contractsSlide/contracts.reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <FlatList
      horizontal
      data={[{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}]}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.item}>
          <Text> {item.key}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
      }}
    />
  );
};

const Pagination = ({totalPages, displayedPages}) => {
  const {page, pageSize} = useSelector(state => state.contracts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContracts({page, pageSize}));
  }, [page]);

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'red',
        alignContent: 'space-between',
      }}>
      <Button
        title={'next'}
        onPress={() => {
          dispatch(advanceToNextPage());
        }}
      />
      <FlatListBasics />
      <Button title={'prev'} />
    </View>
  );
};

export default Pagination;
