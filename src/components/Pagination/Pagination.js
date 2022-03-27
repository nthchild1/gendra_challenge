import React from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';

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
    <View style={styles.container}>
      <FlatList
        horizontal
        data={[{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const Pagination = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'red',
        alignContent: 'space-between',
      }}>
      <Button title={'next'} />
      <FlatListBasics />
      <Button title={'prev'} />
    </View>
  );
};

Pagination.propTypes = {};

export default Pagination;
