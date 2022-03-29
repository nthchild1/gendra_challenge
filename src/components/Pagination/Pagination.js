import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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

const PaginationFlatList = ({displayedPages, page}) => {
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
            style={{
              ...styles.item,
              backgroundColor: page === item ? '#528de5' : 'transparent',
              borderRadius: 5,
              padding: 10,
              margin: 10,
            }}
            onPress={() => dispatch(setPage(item))}>
            <Text
              style={{
                color: page === item ? 'white' : 'black',
                fontSize: 15,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
      contentContainerStyle={{
        flex: 1,
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
        alignContent: 'space-between',
      }}>
      <TouchableOpacity
        onPress={() => {
          dispatch(goBackToPreviousPage());
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
        }}>
        <Image
          style={{width: 20, height: 20}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chevron_left_font_awesome.svg/1200px-Chevron_left_font_awesome.svg.png',
          }}
        />
      </TouchableOpacity>
      <PaginationFlatList displayedPages={displayedPages} page={page} />
      <TouchableOpacity
        onPress={() => {
          dispatch(advanceToNextPage());
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
        }}>
        <Image
          style={{width: 20, height: 20}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chevron_right_font_awesome.svg/1200px-Chevron_right_font_awesome.svg.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
