import React, {useEffect, useState} from 'react';
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
  goBackToPreviousPage,
  setPage,
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

const FlatListBasics = ({displayedPages, page}) => {
  //TODO: Move this to hook
  const [displayedPagesData, setDisplayedPagesData] = useState(
    [...Array(displayedPages + 1).keys()].slice(1),
  );

  useEffect(() => {
    if (page === displayedPagesData[displayedPagesData.length - 1] + 1) {
      setDisplayedPagesData(displayedPagesData.map(value => value + 1));
    } else if (page === displayedPagesData[0] - 1) {
      setDisplayedPagesData(displayedPagesData.map(value => value - 1));
    }
  }, [page]);

  const dispatch = useDispatch();

  return (
    <FlatList
      horizontal
      data={displayedPagesData}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => dispatch(setPage(item))}>
            <Text
              style={{
                backgroundColor: page === item ? 'red' : 'transparent',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
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
        title={'prev'}
        onPress={() => {
          dispatch(goBackToPreviousPage());
        }}
      />
      <FlatListBasics displayedPages={displayedPages} page={page} />
      <Button
        title={'next'}
        onPress={() => {
          dispatch(advanceToNextPage());
        }}
      />
    </View>
  );
};

export default Pagination;
